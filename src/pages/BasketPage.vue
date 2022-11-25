<script lang="ts" setup>
import {
  basketItemsArray,
  removeItemFromBasket,
  basketHasItems,
  subTotal,
  discountValue,
  deliveryFee,
  totalPrice,
} from "../modules/Basket";
import type { FormInstance } from "element-plus";
import { sortedItems } from "../modules/ProductHelper";
import PreviewItemsCard from "../components/PreviewItemsCard.vue";
import { scrollToTop } from "../modules/UtilityHelper";

const ruleFormRef = ref<FormInstance>();

const validateInputCheck = (rule: any, value: any, callback: any) => {
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
      discountValue.value = 13.56;
    } else {
      console.log("Error Submit!", fields);
    }
  });
};

const ruleForm = reactive({
  inputCheck: "",
});

const rules = reactive({
  inputCheck: [{ validator: validateInputCheck, trigger: "blur" }],
});
</script>
<template>
  <div class="container mx-auto py-36 flex flex-col gap-8 paddingX">
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
    <h1 class="text-4xl font-bold text-[#1B4B66]">My cart</h1>
    <div
      class="grid grid-cols-3 clearFlex customGap gap-[4.5rem]"
      v-if="basketHasItems"
    >
      <div class="col-span-2 flex flex-col">
        <div class="flex flex-col gap-8">
          <div
            class="grid grid-cols-2 clearFlex clearGap text-2xl text-[#626262] pb-6 borderBottomColor"
          >
            <span>Product Name</span>
            <div class="grid grid-cols-3 text-center">
              <span>Price</span>
              <span>Qty</span>
              <span>Subtotal</span>
            </div>
          </div>
          <div
            class="grid grid-cols-2 clearFlex clearGap"
            v-for="item in basketItemsArray"
            :key="item.item.id"
          >
            <div class="flex gap-4">
              <el-image :src="item.item.src" class="h-[7.5rem] w-[7.5rem]" />
              <div class="flex flex-col justify-between text-xl">
                <span class="text-[#171520]">{{ item.item.title }}</span
                ><span class="text-[#626262]">{{ item.item.name }}</span
                ><span class="text-[#626262]">Qty-{{ item.count }}</span>
              </div>
            </div>
            <div class="grid grid-cols-3 text-center text-2xl">
              <span>${{ item.item.cost }}</span
              ><span>{{ item.count }}</span
              ><span>${{ item.item.cost * item.count }}</span>
            </div>
            <div></div>
            <div class="flex justify-center gap-10">
              <span
                class="underline decoration-2 decoration-[#1B4B66] text-2xl text-[#1B4B66] cursor-pointer"
                >Move to Wishlist</span
              ><span
                class="underline decoration-2 decoration-[#ff0000] text-2xl text-[#ff0000] cursor-pointer"
                @click="removeItemFromBasket(item)"
                >Remove</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-8">
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
        <div class="flex justify-between clearFlex clearGap">
          <button
            class="btnCart whitespace-nowrap"
            @click="$router.push('/Checkout'), scrollToTop()"
          >
            Place Order
          </button>
          <button
            class="secondBtnCart whitespace-nowrap"
            @click="$router.push('/'), scrollToTop()"
          >
            Continue Shopping
          </button>
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-6">
        <h1 class="text-3xl text-[#171520]">Apply Coupon Code</h1>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="thirdCustomInput"
          ><el-form-item prop="inputCheck"
            ><el-input
              placeholder="Apply Valid code"
              class="pb-2"
              v-model="ruleForm.inputCheck"
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
    </div>
    <div class="flex flex-col gap-8" v-else>
      <h1 class="font-bold text-xl text-[#171520]">
        Your basket is empty. Check our products:
      </h1>
      <span class="text-4xl font-bold text-[#1B4B66] text-center"
        >Handbags</span
      >
      <div class="grid grid-cols-4 gridTwo clearFlex gap-5">
        <PreviewItemsCard
          v-for="item in sortedItems.slice(0, 4)"
          :key="item.id"
          :item="item"
        />
      </div>
      <span class="text-4xl font-bold text-[#1B4B66] text-center">Watcher</span>
      <div class="grid grid-cols-4 gridTwo clearFlex gap-5">
        <PreviewItemsCard
          v-for="item in sortedItems.slice(0, 4)"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
