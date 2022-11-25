<script lang="ts" setup>
import { activeUserTab } from "../modules/UserProfileHelper";
import { orderArray, orderArrayHasItem } from "../modules/OrdersHelper";
</script>
<template>
  <div v-if="activeUserTab === 6" class="flex flex-col gap-10">
    <h1 class="text-[#13101E] text-3xl font-bold borderBottomColor pb-6">
      My Address Book
    </h1>
    <div v-if="orderArrayHasItem">
      <div
        v-for="item in orderArray"
        :key="item.id"
        class="grid grid-cols-3 clearFlex clearGap"
      >
        <div class="flex flex-col gap-3">
          <span class="text-[#13101E] text-xl font-bold">Street Address:</span
          ><span class="text-lg text-[#626262]">{{
            item.informationABoutUser.Address
          }}</span>
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-[#13101E] text-xl font-bold">State:</span
          ><span class="text-lg text-[#626262]">{{
            item.informationABoutUser.State
          }}</span>
        </div>
        <div class="flex flex-col gap-3">
          <span class="text-[#13101E] text-xl font-bold">City:</span
          ><span class="text-lg text-[#626262]">{{
            item.informationABoutUser.City
          }}</span>
        </div>
      </div>
    </div>
    <div v-else class="text-2xl text-[#626262]">
      Your Address Book clear. Add Address with your order.
    </div>
  </div>
</template>
