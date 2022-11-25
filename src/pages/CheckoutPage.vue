<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import {
  basketItemsArray,
  discountValue,
  deliveryFee,
  totalPrice,
  subTotal,
} from "../modules/Basket";
import { addItemToOrder, getRandomId } from "../modules/OrdersHelper";
import { scrollToTop } from "../modules/UtilityHelper";
import router from "../router";

const ruleFormRef = ref<FormInstance>();

const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your name"));
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

const validateAddress = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your address"));
  } else {
    callback();
  }
};

const validateState = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your state"));
  } else {
    callback();
  }
};

const validateCity = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your city"));
  } else {
    callback();
  }
};

const validatePinCode = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter pin code"));
  } else {
    callback();
  }
};

const validateCard = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter your credit card number "));
  } else {
    callback();
  }
};

const validateCardDate = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter the expiration date of your credit card"));
  } else {
    callback();
  }
};

const validateCVV = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter the CVV of your credit card"));
  } else {
    callback();
  }
};

const aaa = ref(subTotal.value);

const SubmitMessage = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push("/Profile");
      addItemToOrder(
        getRandomId(),
        currentDate(),
        "Paid",
        discountValue.value,
        deliveryFee.value,
        aaa.value,
        totalPrice.value,
        Object.assign({}, basketItemsArray.value),
        ruleForm.value
      );
      discountValue.value = 0;
      basketItemsArray.value.length = 0;
      scrollToTop();
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const ruleForm = ref({
  Name: "",
  mobileNumber: "",
  Address: "",
  State: "",
  City: "",
  pinCode: "",
  Card: "",
  cardDate: "",
  CVV: "",
});

const rules = reactive({
  Name: [{ validator: validateName, trigger: "blur" }],
  mobileNumber: [{ validator: validatePhone, trigger: "blur" }],
  Address: [{ validator: validateAddress, trigger: "blur" }],
  State: [{ validator: validateState, trigger: "blur" }],
  City: [{ validator: validateCity, trigger: "blur" }],
  pinCode: [
    { validator: validatePinCode, trigger: "blur" },
    {
      min: 6,
      max: 6,
      message: "Length should be 6",
      trigger: "blur",
    },
  ],
  Card: [
    { validator: validateCard, trigger: "blur" },
    {
      min: 20,
      max: 20,
      message: "Please write correct number of credit card",
      trigger: "blur",
    },
  ],
  cardDate: [
    { validator: validateCardDate, trigger: "blur" },
    {
      min: 5,
      max: 5,
      message: "Please write correct expiration date of credit card",
      trigger: "blur",
    },
  ],
  CVV: [
    { validator: validateCVV, trigger: "blur" },
    {
      min: 3,
      max: 3,
      message: "Please write correct CVV code",
      trigger: "blur",
    },
  ],
});

const formatCard = computed(() => {
  if (ruleForm.value) {
    const el = ruleForm.value.Card;
    el.length % 5 === 4
      ? (ruleForm.value.Card += " ")
      : (ruleForm.value.Card += "");
  }
});

const formatDate = computed(() => {
  if (ruleForm.value) {
    const el = ruleForm.value.cardDate;
    el.length % 4 === 2
      ? (ruleForm.value.cardDate += "/")
      : (ruleForm.value.cardDate += "");
  }
});

const currentDate = () => {
  const objDate = new Date();
  const locale = "en-us";
  const month = objDate.toLocaleString(locale, { month: "long" });
  const Day = objDate.getUTCDate();
  const Year = objDate.getFullYear();
  return month + " " + Day + "," + " " + Year;
};
</script>
<template>
  <div class="container mx-auto flex flex-col py-36 gap-10 paddingX">
    <div class="flex items-center text-xl gap-3">
      <h1
        class="text-[#1B4B66] text-2xl hover:text-[#639599] cursor-pointer"
        @click="$router.push('/'), scrollToTop()"
      >
        Home
      </h1>
      <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
      <h1 class="cursor-text text-[#626262] text-2xl">My Cart</h1>
    </div>
    <h1 class="text-4xl font-bold text-[#1B4B66]">Checkout</h1>
    <div class="grid grid-cols-3 clearFlex clearGap gap-[4.5rem]">
      <div class="col-span-2 flex flex-col gap-6">
        <el-form
          label-position="top"
          status-icon
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="secondCustomInput flex flex-col gap-8 clearGap customBorderRadius p-8 formPadding"
          v-if="ruleForm"
        >
          <h1 class="text-[#13101E] text-3xl font-bold text-center">
            Your Address
          </h1>
          <div class="grid grid-cols-2 clearFlex gap-6 pt-4 pb-4">
            <el-form-item prop="Name"
              ><template #label
                ><div class="formItemLabel">Full Name</div></template
              ><el-input
                type="text"
                class="pb-2"
                v-model="ruleForm.Name"
                placeholder="Enter Name"
            /></el-form-item>
            <el-form-item prop="mobileNumber"
              ><template #label
                ><div class="formItemLabel">Mobile Number</div></template
              ><el-input
                class="pb-2"
                v-model="ruleForm.mobileNumber"
                placeholder="Enter Number"
            /></el-form-item>
            <el-form-item prop="Address">
              <template #label
                ><div class="formItemLabel">Street Address</div></template
              >
              <el-input
                type="text"
                class="pb-2"
                v-model="ruleForm.Address"
                placeholder="Enter Address" /></el-form-item
            ><el-form-item prop="State">
              <template #label><div class="formItemLabel">State</div></template>
              <el-input
                class="pb-2"
                type="text"
                v-model="ruleForm.State"
                placeholder="Enter State" /></el-form-item
            ><el-form-item prop="City">
              <template #label><div class="formItemLabel">City</div></template>
              <el-input
                type="text"
                class="pb-2"
                v-model="ruleForm.City"
                placeholder="Enter City" /></el-form-item
            ><el-form-item prop="pinCode">
              <template #label
                ><div class="formItemLabel">Enter Pin Code</div></template
              >
              <el-input
                class="pb-2"
                v-model="ruleForm.pinCode"
                placeholder="Pin Code"
            /></el-form-item>
          </div>
          <h1 class="text-[#13101E] text-3xl font-bold text-center">Payment</h1>
          <div class="grid grid-cols-2 clearFlex gap-6 pt-4 pb-4">
            <el-form-item prop="Card"
              ><template #label
                ><div class="formItemLabel">Card Number</div></template
              ><el-input
                class="pb-2"
                maxlength="19"
                minlength="19"
                v-model="ruleForm.Card"
                @keyup="formatCard"
            /></el-form-item>
            <el-form-item prop="cardDate"
              ><template #label
                ><div class="formItemLabel">Expiration Date</div></template
              ><el-input
                class="pb-2"
                maxlength="5"
                minlength="5"
                v-model="ruleForm.cardDate"
                @keyup="formatDate"
              />
            </el-form-item>
            <el-form-item prop="CVV"
              ><template #label><div class="formItemLabel">CVV</div></template
              ><el-input
                minlength="3"
                maxlength="3"
                class="pb-2"
                v-model="ruleForm.CVV"
            /></el-form-item>
          </div>
        </el-form>
        <div class="flex justify-between clearFlexReverse clearGap">
          <h1
            class="text-[#1B4B66] btnPosition text-2xl font-bold underline cursor-pointer underline-offset-2 decoration-[#1B4B66]"
            @click="$router.push('/MyCart'), scrollToTop()"
          >
            Back to Cart
          </h1>
          <button class="btnCart" @click="SubmitMessage(ruleFormRef)">
            Place Order
          </button>
        </div>
      </div>
      <div class="col-span-1">
        <div class="flex flex-col gap-8">
          <span class="text-2xl text-[#171520] pb-6 borderBottomColor">
            Order Details</span
          >
          <div v-for="item in basketItemsArray" :key="item.item.id">
            <div class="flex gap-6">
              <el-image class="h-[7.5rem] w-[7.5rem]" :src="item.item.src" />
              <div class="flex flex-col font-bold text-xl justify-between">
                <span class="text-[#171520]">{{ item.item.title }}</span
                ><span class="text-[#626262]">{{ item.item.name }}</span
                ><span class="text-[#626262]">Qty-{{ item.count }}</span>
              </div>
            </div>
          </div>
          <span class="text-2xl text-[#13101E] borderBottomColor pb-6"
            >Order Summary</span
          >
          <div class="flex flex-col gap-2 text-xl">
            <div class="flex justify-between">
              <span class="text-[#626262]">Sub Total</span
              ><span>${{ subTotal }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[#626262]">Discount</span
              ><span>-${{ discountValue }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[#626262]">Delivery Fee</span
              ><span>${{ deliveryFee }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[#171520]">Grand Total</span
              ><span>${{ totalPrice }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
