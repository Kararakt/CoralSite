<script lang="ts" setup>
import { activeTab, TabGrandeItems } from "../modules/ProductHelper";
import TabAboutProduct from "../components/TabAboutProduct.vue";
import ProductLocation from "../components/ProductLocation.vue";
import ProductInformation from "../components/ProductInformation.vue";
import { sortedItems } from "../modules/ProductHelper";
</script>
<template>
  <div class="flex flex-col gap-[4rem] clearGap">
    <div class="container mx-auto pt-36 paddingX flex flex-col gap-6">
      <ProductLocation
        :productLocation="'Handbag'"
        :productLocationLabel="'Grande'"
      />
      <div class="grid grid-cols-2 gap-10 clearFlex">
        <div class="flex flex-col">
          <div v-for="TabGrandeItem in TabGrandeItems" :key="TabGrandeItem.id">
            <el-image
              v-if="activeTab === TabGrandeItem.count"
              :src="TabGrandeItem.src"
              class="w-full h-auto"
            />
          </div>
          <div class="flex gap-4 justify-center pt-4">
            <button
              @click="activeTab -= 1"
              :disabled="activeTab === 1"
              class="text-[#171520] text-2xl font-bold"
            >
              <el-icon><ArrowLeftBold /></el-icon>
            </button>
            <div
              v-for="TabGrandeItem in TabGrandeItems"
              :key="TabGrandeItem.id"
            >
              <el-image
                @click="activeTab = TabGrandeItem.count"
                :class="
                  activeTab === TabGrandeItem.count ? 'activeImageBorder' : ''
                "
                class="customBorder cursor-pointer h-[8rem] w-auto imageHoverBorder picProduct"
                :src="TabGrandeItem.src"
              />
            </div>
            <button
              class="text-[#171520] text-2xl font-bold"
              @click="activeTab += 1"
              :disabled="activeTab === 4"
            >
              <el-icon><ArrowRightBold /></el-icon>
            </button>
          </div>
        </div>
        <ProductInformation
          v-for="allItem in sortedItems.slice(0, 1)"
          :key="allItem.id"
          :item="allItem"
        />
      </div>
    </div>
    <div class="container mx-auto pb-36">
      <TabAboutProduct />
    </div>
  </div>
</template>
