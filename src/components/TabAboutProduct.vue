<script lang="ts" setup>
import {
  titleTabs,
  secondActiveTab,
  descriptionTabs,
} from "../modules/ProductHelper";
</script>
<template>
  <div
    class="bg-[#F1F1F1] h-[6.5rem] flex items-center clearFlex borderColor tabHeight"
  >
    <div v-for="titleTab in titleTabs" class="pl-10">
      <span
        class="text-2xl font-bold text-[#626262] spanHover cursor-pointer px-10 py-6"
        @click="secondActiveTab = titleTab.currentTab"
        :class="
          secondActiveTab === titleTab.currentTab ? 'tabAboutProduct' : ''
        "
        >{{ titleTab.title }}</span
      >
    </div>
  </div>
  <div v-for="descriptionTab in descriptionTabs" :key="descriptionTab.id">
    <div
      v-if="secondActiveTab === descriptionTab.count"
      class="flex flex-col gap-4 text-xl text-[#626262] pt-8 clearPaddingX"
    >
      <div>{{ descriptionTab.firstDescription }}</div>
      <div>{{ descriptionTab.secondDescription }}</div>
      <div>{{ descriptionTab.thirdDescription }}</div>
    </div>
  </div>
</template>
