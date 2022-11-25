<script lang="ts" setup>
import PersonalInformation from "../UserProfileComponents/PersonalInformation.vue";
import WishlistInProfile from "../UserProfileComponents/WishlistInProfile.vue";
import OrdersProfile from "../UserProfileComponents/OrdersProfile.vue";
import ReferUserProfile from "../UserProfileComponents/ReferUserProfile.vue";
import Reviews from "../UserProfileComponents/Reviews.vue";
import SavedCardProfileUser from "../UserProfileComponents/SavedCardProfileUser.vue";
import {
  allProfileInformation,
  activeUserTab,
  titleProfileInformation,
} from "../modules/UserProfileHelper";
import AddressProfileUser from "../UserProfileComponents/AddressProfileUser.vue";
import { scrollToTop } from "../modules/UtilityHelper";
</script>
<template>
  <div class="container mx-auto flex flex-col py-36 secondPaddingX">
    <div class="flex items-center text-xl smallText pb-10">
      <h1
        class="text-[#1B4B66] text-2xl smallText hover:text-[#639599] cursor-pointer"
        @click="$router.push('/'), scrollToTop()"
      >
        Home
      </h1>
      <div class="px-[1rem] iconPadding flex items-center">
        <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
      </div>
      <h1
        class="cursor-text text-[#626262] text-2xl smallText whitespace-nowrap"
      >
        User Profile
      </h1>
      <div v-for="tab in titleProfileInformation" :key="tab.id">
        <div v-if="activeUserTab === tab.id" class="flex items-center">
          <div class="flex items-center iconPadding px-[1rem]">
            <el-icon><ArrowRight class="text-[#60578a]" /></el-icon>
          </div>
          <span class="text-[#626262] text-2xl smallText whitespace-nowrap">{{
            tab.title
          }}</span>
        </div>
      </div>
    </div>
    <div
      v-for="tab in titleProfileInformation"
      :key="tab.id"
      class="flex justify-between"
    >
      <div v-if="activeUserTab === tab.id">
        <span class="text-4xl font-bold text-[#1B4B66]">{{ tab.title }}</span>
      </div>
    </div>
    <div class="grid grid-cols-3 clearFlex gap-[4.5rem] clearGap pt-10">
      <div class="col-span-1 flex flex-col bg-[#F1F1F1] secondCustomBorder">
        <div v-for="item in allProfileInformation" :key="item.id" class="my-6">
          <div
            class="flex items-center justify-between cursor-pointer p-3"
            @click="activeUserTab = item.id"
            :class="activeUserTab === item.id ? 'tabUser' : ''"
          >
            <span class="text-2xl text-[#13101E]">{{ item.title }}</span>
            <el-icon :size="30"><ArrowRight class="text-[#13101E]" /></el-icon>
          </div>
        </div>
      </div>

      <div class="col-span-2 flex flex-col gap-2 mt-6">
        <PersonalInformation />
        <ReferUserProfile />
        <WishlistInProfile />
        <OrdersProfile />
        <Reviews />
        <AddressProfileUser />
        <SavedCardProfileUser />
      </div>
    </div>
  </div>
</template>
