<script lang="ts" setup>
import PreviewItemsCard from "../components/PreviewItemsCard.vue";
import { wishlistItemsArray, wishlistHasItem } from "../modules/Wishlist";
import { sortedItems } from "../modules/ProductHelper";
const value = ref(5);
</script>
<template>
  <div class="container mx-auto flex flex-col gap-10 py-36 paddingX">
    <div class="flex items-center text-xl gap-3">
      <h1
        class="text-[#1B4B66] text-2xl hover:text-[#639599] cursor-pointer"
        @click="$router.push('/')"
      >
        Home
      </h1>
      <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
      <h1 class="cursor-text text-[#626262] text-2xl">Wishlist</h1>
    </div>
    <h1 class="text-4xl font-bold text-[#1B4B66]">My Wishlist</h1>
    <div class="grid grid-cols-3 clearFlex gap-5" v-if="wishlistHasItem">
      <div v-for="wishlist in wishlistItemsArray" :key="wishlist.id">
        <PreviewItemsCard :item="wishlist" />
      </div>
    </div>
    <div class="flex flex-col gap-8" v-else>
      <h1 class="font-bold text-xl text-[#171520]">
        Your wishlist is empty. Check our products:
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
      <div class="grid grid-cols-4 gridTwo clearGrid clearFlex gap-5">
        <PreviewItemsCard
          v-for="item in sortedItems.slice(0, 4)"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>
