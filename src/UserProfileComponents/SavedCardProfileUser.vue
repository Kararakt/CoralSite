<script lang="ts" setup>
import { activeUserTab } from "../modules/UserProfileHelper";
</script>
<template>
  <div v-if="activeUserTab === 7" class="flex flex-col gap-10">
    <h1 class="text-[#13101E] text-3xl font-bold borderBottomColor pb-6">
      My Saved Cards
    </h1>
    <div class="text-2xl text-[#626262]">You don't have any saved cards</div>
  </div>
</template>
