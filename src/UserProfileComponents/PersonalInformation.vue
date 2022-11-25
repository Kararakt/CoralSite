<script lang="ts" setup>
import { activeUserTab } from "../modules/UserProfileHelper";
import type { FormInstance } from "element-plus";
import { ref, reactive } from "vue";

const ruleFormRef = ref<FormInstance>();

const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your name"));
  } else {
    callback();
  }
};

const validateLastName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your last name"));
  } else {
    callback();
  }
};

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  } else if (value.indexOf("@") == -1) {
    callback(new Error("Please input correct address"));
  } else if (value.indexOf(".") == -1) {
    callback(new Error("Please input correct address"));
  } else {
    callback();
  }
};

const isValidPhone = (string: any) => {
  let res = string.match(
    /^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/
  );
  return res !== null;
};

const validatePhone = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the phone"));
  } else if (isValidPhone(value) === false) {
    callback(new Error("Please input the correct phone"));
  } else {
    callback();
  }
};

const validateData = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your birth data"));
  } else {
    callback();
  }
};

const validateCurrentPassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your password"));
  } else {
    callback();
  }
};

const validateNewPassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password"));
  } else {
    if (ruleForm.repeatNewPassword !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("repeatNewPassword", () => null);
    }
    callback();
  }
};
const validateRepeatNewPassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== ruleForm.newPassword) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

const SaveChanges = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("Your Changes saves");
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const ruleForm = reactive({
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  date: "",
  currentPassword: "",
  newPassword: "",
  repeatNewPassword: "",
});

const rules = reactive({
  firstName: [{ validator: validateName, trigger: "blur" }],
  lastName: [{ validator: validateLastName, trigger: "blur" }],
  email: [{ validator: validateEmail, trigger: "blur" }],
  mobileNumber: [{ validator: validatePhone, trigger: "blur" }],
  date: [{ validator: validateData, trigger: "blur" }],
  currentPassword: [{ validator: validateCurrentPassword, trigger: "blur" }],
  newPassword: [{ validator: validateNewPassword, trigger: "blur" }],
  repeatNewPassword: [
    { validator: validateRepeatNewPassword, trigger: "blur" },
  ],
});
</script>
<template>
  <div v-if="activeUserTab === 1" class="flex flex-col gap-8">
    <h1 class="text-[#13101E] text-3xl font-bold borderBottomColor pb-6">
      Personal Information
    </h1>
    <div class="flex clearFlex gap-8 itemPosition items-end">
      <el-avatar :size="100" src="/src/assets/biba_logo.png" />
      <div class="flex gap-5">
        <div><button class="btnCart">Upload</button></div>
        <div>
          <button class="btnDelete">
            <el-icon> <Delete /> </el-icon>Delete
          </button>
        </div>
      </div>
    </div>
    <el-form
      label-position="top"
      status-icon
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="thirdCustomInput flex flex-col gap-10"
      ><div class="grid grid-cols-2 clearFlex gap-6">
        <el-form-item prop="firstName"
          ><template #label
            ><div class="formItemLabel">First Name</div></template
          ><el-input
            class="pb-2"
            type="text"
            v-model="ruleForm.firstName"
            placeholder="John"
        /></el-form-item>
        <el-form-item prop="lastName"
          ><template #label
            ><div class="formItemLabel">Last Name Name</div></template
          ><el-input
            class="pb-2"
            type="text"
            v-model="ruleForm.lastName"
            placeholder="Doe"
        /></el-form-item>
        <el-form-item prop="email"
          ><template #label><div class="formItemLabel">Email</div></template
          ><el-input
            class="pb-2"
            type="text"
            v-model="ruleForm.email"
            placeholder="Johndoe@johndoe.com"
        /></el-form-item>
        <el-form-item prop="mobileNumber"
          ><template #label
            ><div class="formItemLabel">Mobile Number</div></template
          ><el-input
            class="pb-2"
            v-model="ruleForm.mobileNumber"
            placeholder="7777777777"
        /></el-form-item>
        <el-form-item prop="date"
          ><template #label
            ><div class="formItemLabel">Date of birth</div></template
          ><el-input class="pb-2" type="date" v-model="ruleForm.date"
        /></el-form-item>
      </div>
      <h1 class="text-[#13101E] text-3xl font-bold borderBottomColor pb-6">
        Change password
      </h1>
      <div class="grid grid-cols-2 clearFlex gap-6">
        <el-form-item prop="currentPassword"
          ><template #label
            ><div class="formItemLabel">Current Password</div></template
          ><el-input
            show-password
            v-model="ruleForm.currentPassword"
            class="pb-2"
            type="password"
            placeholder="White your password"
        /></el-form-item>
        <el-form-item prop="newPassword"
          ><template #label
            ><div class="formItemLabel">New Password</div></template
          ><el-input
            show-password
            v-model="ruleForm.newPassword"
            class="pb-2"
            type="password"
            placeholder="Write new password"
        /></el-form-item>
        <el-form-item prop="repeatNewPassword"
          ><template #label
            ><div class="formItemLabel">Confirm Password</div></template
          ><el-input
            show-password
            v-model="ruleForm.repeatNewPassword"
            class="pb-2"
            type="password"
            placeholder="Confirm your password"
        /></el-form-item>
      </div>
    </el-form>
    <div class="flex justifyPosition justify-end">
      <button class="btnCart" @click="SaveChanges(ruleFormRef)">
        Save Changes
      </button>
    </div>
  </div>
</template>
