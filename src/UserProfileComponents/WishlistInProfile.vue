<script lang="ts" setup>
import PreviewItemsCard from "../components/PreviewItemsCard.vue";
import { activeUserTab } from "../modules/UserProfileHelper";
import { wishlistItemsArray, wishlistHasItem } from "../modules/Wishlist";
</script>
<template>
  <div v-if="activeUserTab === 4" class="flex flex-col gap-8">
    <h1 class="text-[#13101E] text-3xl font-bold borderBottomColor pb-6">
      My Wishlist
    </h1>
    <div v-if="wishlistHasItem" class="grid grid-cols-2 clearFlex gap-10">
      <div v-for="wishlist in wishlistItemsArray" :key="wishlist.id">
        <PreviewItemsCard :item="wishlist" />
      </div>
    </div>
    <div v-else class="text-2xl text-[#626262]">Your wishlist is empty.</div>
  </div>
</template>
