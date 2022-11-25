<script lang="ts" setup>
import { activeUserTab } from "../modules/UserProfileHelper";
</script>
<template>
  <div v-if="activeUserTab === 5" class="flex flex-col gap-10">
    <h1 class="text-[#13101E] text-3xl font-bold borderBottomColor pb-6">
      My Reviews
    </h1>
    <div class="text-2xl text-[#626262]">You have not left any feedback.</div>
  </div>
</template>
