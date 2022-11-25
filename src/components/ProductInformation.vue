<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { copyText } from "../modules/ProductHelper";
import { handbagsView } from "../modules/ProductHelper";
import { addItemToBasket } from "../modules/Basket";
import {
  addItemToWishlist,
  hasActiveHeart,
  removeItemFromWishlist,
} from "../modules/Wishlist";

const productRate = ref(5);
const props = defineProps({
  item: Object as () => handbagsView,
});

let count = ref(1);
const ruleFormRef = ref<FormInstance>();

const validateCodeInput = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please enter a discount code"));
  } else if (value != "ORDER100") {
    callback(new Error("Please enter a valid discount code"));
  } else {
    callback();
  }
};

const SubmitMessage = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("Submit!");
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const ruleForm = reactive({
  codeInput: "",
});

const rules = reactive({
  codeInput: [{ validator: validateCodeInput, trigger: "blur" }],
});

const heartActive = computed(() => {
  if (props.item != null) return hasActiveHeart(props.item);
});

const clickActiveHeart = () => {
  if (heartActive.value === true && props.item != null) {
    removeItemFromWishlist(props.item);
  } else if (props.item != null) {
    addItemToWishlist(props.item);
  }
};
</script>
<template>
  <div
    class="flex flex-col gap-4 ml-auto marginRemove secondPaddingTop"
    v-if="props.item != null"
  >
    <h1 class="text-3xl text-[#13101E] font-bold">
      {{ props.item.title }}
    </h1>
    <span class="text-xl text-[#626262]"
      >{{ props.item.name }} with adjustable straps</span
    >
    <div class="flex items-end gap-2 divRate">
      <el-rate v-model="productRate" disabled size="large" />
      <span class="text-[#626262] text-lg pt-[0.625rem]">(250) Ratings</span>
    </div>
    <div class="flex items-center gap-3 pb-8 borderBottomColor">
      <h1 class="text-[#171520] font-bold text-4xl">${{ props.item.cost }}</h1>
      <span class="line-through text-2xl font-semibold text-[#626262]">{{
        props.item.costOld
      }}</span>
      <span class="text-[#FF404B] text-2xl">{{ props.item.sale }}</span>
    </div>
    <div class="flex flex-col gap-6">
      <div class="flex gap-10 pt-6 clearFlex">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold text-[#171520]">Delivery Details</h1>
          <span class="text-[#626262] text-lg"
            >Check estimated delivery<br />
            date/pickup option.</span
          >
        </div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="secondCustomInput"
          ><el-form-item prop="codeInput"
            ><el-input
              placeholder="Apply Valid code"
              v-model="ruleForm.codeInput"
              ><template #append
                ><span
                  @click="SubmitMessage(ruleFormRef)"
                  class="cursor-pointer text-[#1B4B66] text-lg hover:text-[#639599]"
                  >Check</span
                >
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="flex items-center gap-6">
        <h1 class="text-2xl font-bold text-[#13101E]">Quantity:</h1>
        <div class="quantityCount">
          <button @click="count--" :disabled="count === 1">
            <font-awesome-icon icon="fa-solid fa-minus" />
          </button>
          <h1 class="text-[2rem]">{{ count }}</h1>
          <button @click="count++">
            <font-awesome-icon icon="fa-solid fa-plus" />
          </button>
        </div>
      </div>
      <div class="codeCard clearFlex">
        <div class="flex flex-col gap-2">
          <div class="text-xl text-[#171520] font-bold">
            Get upto 30% Off on order value <br />
            above $100
          </div>
          <h1 class="text-[#1B4B66]">Terms & Conditions</h1>
        </div>
        <div class="bodyCodeCard cursor-pointer" @click="copyText()">
          <h1 class="text-[#626262]">Use Code</h1>
          <span class="text-[#171520] text-lg font-bold">ORDER100</span>
        </div>
      </div>
      <div class="grid grid-cols-2 clearFlex gap-4">
        <div class="btnAddToCart" @click="addItemToBasket(props.item!, count)">
          <el-image src="/src/assets/cart_white.png" class="h-[2rem]" />
          <h1 class="text-lg text-white">Add To Bag</h1>
        </div>
        <div class="btnAddToWishList" @click="clickActiveHeart()">
          <el-image src="/src/assets/heart.svg" class="h-[2rem]" />
          <h1 class="text-lg text-[#1B4B66]">Add To Wishlist</h1>
        </div>
      </div>
    </div>
  </div>
</template>
