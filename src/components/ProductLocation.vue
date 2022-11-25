<script lang="ts" setup>
import { scrollToTop } from "../modules/UtilityHelper";
const props = defineProps({
  productLocation: String,
  productLocationLabel: String,
});
</script>
<template>
  <div class="flex gap-4 items-center text-2xl locationProduct">
    <h1
      class="text-[#1B4B66] hover:text-[#639599] cursor-pointer"
      @click="$router.push('/'), scrollToTop()"
    >
      Home
    </h1>
    <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
    <span
      @click="$router.push('/Handbags'), scrollToTop()"
      class="text-[#1B4B66] font-bold hover:text-[#639599] cursor-pointer"
      >{{ props.productLocation }}</span
    >
    <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
    <h1 class="text-[#626262] text-2xl font-bold">
      {{ props.productLocationLabel }}
    </h1>
  </div>
</template>
