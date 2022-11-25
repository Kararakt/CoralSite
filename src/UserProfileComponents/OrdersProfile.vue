<script lang="ts" setup>
import { activeUserTab } from "../modules/UserProfileHelper";
import {
  orderArrayHasItem,
  Search,
  searchOrderItem,
  searchOrderHasItem,
} from "../modules/OrdersHelper";
import Collapse from "../components/Collapse.vue";
</script>
<template>
  <div v-if="activeUserTab === 3" class="flex flex-col gap-10">
    <div
      class="flex clearFlex clearGap itemPosition justify-between items-center"
    >
      <h1 class="text-[#13101E] text-3xl font-bold">My Orders</h1>
      <div class="customInput inputWidth w-1/3">
        <el-input v-model="Search" placeholder="Input your order number" />
      </div>
    </div>
    <div v-if="orderArrayHasItem" class="flex flex-col gap-8">
      <div
        class="grid grid-cols-5 clearFlex borderBottomColor text-center pb-6 text-[#626262] font-bold text-xl"
      >
        <h1>Order ID</h1>
        <h1>Date</h1>
        <h1>Price</h1>
        <h1>Status</h1>
      </div>
      <div
        v-for="item in searchOrderItem"
        :key="item.id"
        v-if="searchOrderHasItem"
      >
        <Collapse
          ><template #header>
            <div
              class="bg-[#F1F1F1] borderTop cursor-pointer py-6 grid grid-cols-5 clearFlex text-xl font-bold text-[#171520] text-center"
            >
              <h1>#{{ item.id }}</h1>
              <h1>{{ item.date }}</h1>
              <h1>${{ item.totalPrice }}</h1>
              <h1>{{ item.status }}</h1>
              <div class="flex items-center justify-end mr-10 activeIcon">
                <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
              </div></div
          ></template>
          <div class="bg-[#F1F1F1] borderBottom flex flex-col gap-4 p-10">
            <div
              class="grid grid-cols-5 clearFlex startItems borderBottomColor pb-3 text-xl text-[#60578a]"
            >
              <h1 class="col-span-2">Product Name</h1>
              <h1 class="text-center">Price</h1>
              <h1 class="text-center">Qty</h1>
              <h1 class="text-center">Subtotal</h1>
            </div>
            <div v-for="orderItem in item.orderItems" :key="orderItem.item.id">
              <div class="grid grid-cols-5 clearFlex clearGap">
                <div class="col-span-2 flex flex-col">
                  <div class="flex gap-3">
                    <el-image
                      :src="orderItem.item.src"
                      class="h-[7.5rem] w-[7.5rem]"
                    />
                    <div class="flex flex-col gap-2 text-xl">
                      <h1 class="text-[#171520]">{{ orderItem.item.title }}</h1>
                      <h1 class="text-[#626262]">{{ orderItem.item.name }}</h1>
                    </div>
                  </div>
                </div>
                <span class="text-center startItems text-xl text-[#171520]"
                  >${{ orderItem.item.cost }}</span
                >
                <span class="text-center startItems text-xl text-[#171520]">{{
                  orderItem.count
                }}</span>
                <span class="text-center startItems text-xl text-[#171520]"
                  >${{ orderItem.item.cost * orderItem.count }}</span
                >
              </div>
            </div>
            <h1 class="borderBottomColor pt-5 pb-3 text-2xl text-[#13101E]">
              Order Information
            </h1>
            <div class="pt-2 grid grid-cols-5 clearFlex text-xl text-[#60578a]">
              <h1 class="col-span-2">Order Details</h1>
              <h1 class="col-span-1 startItems text-center">Payment Details</h1>
              <h1 class="col-span-2 startItems text-center">Address Details</h1>
            </div>
            <div class="grid grid-cols-5 clearFlex clearGap">
              <div
                class="col-span-2 flex flex-col gap-2 text-xl text-[#171520] pr-10 font-bold"
              >
                <div class="flex justify-between">
                  <h1>SubTotal</h1>
                  <span>${{ item.subTotal }}</span>
                </div>
                <div class="flex justify-between">
                  <h1>Discount</h1>
                  <span>-${{ item.discount }}</span>
                </div>
                <div class="flex justify-between">
                  <h1>Delivery Fee</h1>
                  <span>${{ item.deliveryFee }}</span>
                </div>
                <div class="flex justify-between">
                  <h1>Grand Total</h1>
                  <span>${{ item.totalPrice }}</span>
                </div>
              </div>
              <div class="col-span-1 text-center text-xl">
                Paid by credit card
              </div>
              <div
                class="col-span-2 flex flex-col gap-2 text-[#171520] font-bold text-center"
              >
                <h1>{{ item.informationABoutUser.State }}</h1>
                <h1>{{ item.informationABoutUser.City }}</h1>
                <h1>{{ item.informationABoutUser.Address }}</h1>
                <h1>{{ item.informationABoutUser.pinCode }}</h1>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div v-else class="text-2xl text-[#171520] font-bold">
        Nothing found for your request.
      </div>
    </div>
    <div v-else class="text-2xl text-[#626262]">
      You have not made any order yet.
    </div>
  </div>
</template>
