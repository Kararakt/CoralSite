<script setup lang="ts">
import PreviewItemsCard from "../components/PreviewItemsCard.vue";
import { allItems } from "../modules/ProductHelper";
import { scrollToTop } from "../modules/UtilityHelper";

const photos = [
  {
    id: 1,
    title: "Personal Care",
    src: "/src/assets/personal_care.png",
  },
  {
    id: 2,
    title: "Handbags",
    src: "/src/assets/handbags.png",
  },
  {
    id: 3,
    title: "Wrist Watches",
    src: "/src/assets/wrist_watches.png",
  },
  {
    id: 4,
    title: "Sun Glasses",
    src: "/src/assets/sun_glasses.png",
  },
];

const brands = [
  {
    id: 1,
    src: "/src/assets/zara_brand.png",
  },
  {
    id: 2,
    src: "/src/assets/dc_brand.png",
  },
  {
    id: 3,
    src: "/src/assets/hm_logo.png",
  },
  {
    id: 4,
    src: "/src/assets/chanel_logo.png",
  },
  {
    id: 5,
    src: "/src/assets/prada_logo.png",
  },
  {
    id: 6,
    src: "/src/assets/biba_logo.png",
  },
];
</script>
<template>
  <div>
    <div class="bg-[#F0F0F0] text-[#171520] text-center py-6 text-lg">
      We are currently experiencing local customs clearance delays. For the
      latest updates, please check your order status
      <span
        @click="$router.push('/Profile'), scrollToTop()"
        class="text-[#1B4B66] hover:text-[#639599] hover:decoration-[#639599] cursor-pointer underline underline-offset-4 decoration-[#1B4B66]"
        >here</span
      >
    </div>
    <div class="container mx-auto pt-16 pb-36 paddingBottom">
      <el-carousel
        indicator-position="none"
        arrow="never"
        height="25rem"
        :autoplay="true"
        :interval="3000"
      >
        <el-carousel-item>
          <div class="relative h-full">
            <div
              class="absolute z-10 flex flex-col gap-4 top-[45%] left-[15%] picCarousel"
            >
              <h1 class="text-4xl colorTextHomePage font-bold text-[#9C1C00]">
                Spring Summer<br />
                Collection
              </h1>
              <div
                class="text-[#9C1C00] text-lg px-6 py-3 textCustom bg-[#DEDEDE] text-center customBorder"
              >
                UPTO 20% OFF
              </div>
            </div>
            <el-image
              src="/src/assets/first_carousel_item.png"
              class="w-full h-full customBorder"
            />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="relative h-full">
            <div class="absolute z-10 right-[0%] top-[45%]">
              <div
                class="py-5 customSecondBorder px-10 flex flex-col gap-2 textPaddingGap bg-[#DEDEDE] text-[#1B4B66]"
              >
                <h1 class="text-4xl font-bold colorTextHomePage">
                  Carry your Funk
                </h1>
                <span class="text-lg"
                  >Trendy handbags collection for your party animal</span
                >
              </div>
            </div>
            <el-image
              src="/src/assets/second_carousel_item.png"
              class="w-full h-full customBorder"
            />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container mx-auto">
      <div class="flex justify-between PadX spaceBetween">
        <h1 class="text-[#13101E] font-bold text-4xl">New Arrivals</h1>
        <div class="flex gap-4 items-center text-lg">
          <span
            @click="$router.push('/Handbags'), scrollToTop()"
            class="text-[#1B4B66] text-lg font-bold hover:text-[#639599] cursor-pointer"
            >View All</span
          ><el-icon :size="30"><ArrowRight /></el-icon>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto grid grid-cols-4 cardAll paddingX clearGrid clearGap gap-10 py-36 cardFlex"
    >
      <div v-for="allItem in allItems.slice(0, 4)" :key="allItem.id">
        <PreviewItemsCard :item="allItem" />
      </div>
    </div>
    <div class="bg-[#1B4B66]">
      <div class="container mx-auto flex flex-col gap-8 py-16">
        <h1
          class="text-4xl font-bold PadX text-white colorTextHomePage spaceBetween"
        >
          Handpicked Collections
        </h1>
        <div class="grid grid-cols-4 PadX clearGrid gridPicBrands gap-10">
          <div v-for="photo in photos" :key="photo.id" class="relative h-full">
            <div
              class="absolute z-10 left-[10%] bottom-[8%] text-[#171520] font-bold text-2xl"
            >
              {{ photo.title }}
            </div>
            <el-image :src="photo.src" class="w-full" />
          </div>
        </div>
      </div>
    </div>
    <div class="pt-36 container mx-auto flex flex-col gap-8 paddingTop">
      <h1
        class="text-[#13101E] font-bold text-4xl PadX colorTextHomePage spaceBetween"
      >
        Shop by Brands
      </h1>
      <div class="grid grid-cols-6 clearSecondGrid gap-10 PadX cardFlex">
        <div v-for="brand in brands" :key="brand.id">
          <el-image :src="brand.src" class="w-full" />
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col gap-10 py-36 paddingTop">
      <div class="relative h-full customPadding">
        <div
          class="absolute z-10 left-[10%] top-[30%] picFirstRelative flex flex-col gap-3 text-[#97451F] font-bold"
        >
          <h1 class="text-3xl colorTextHomePage">LIFESTYLE</h1>
          <span class="text-5xl leading-snug colorTextHomePage"
            >Makeup Accessories<br />
            from Top Brands</span
          >
        </div>
        <el-image src="/src/assets/lifestyle_pic.png" class="customBorder" />
      </div>
      <div class="grid grid-cols-2 flexGap clearFlex gap-10">
        <div class="relative h-full">
          <div
            class="absolute z-10 flex flex-col picSecondRelative gap-4 items-end right-[8%] top-[25%]"
          >
            <h1 class="text-[#A53F64] text-3xl">Skincare Essentials</h1>
            <div
              class="h-16 w-16 secondCustomBorder text-[#A53F64] bg-[#F1F1F1] flex items-center justify-center text-4xl cursor-pointer"
            >
              <el-icon><Right /></el-icon>
            </div>
          </div>
          <el-image src="/src/assets/skincare_pic.png" class="customBorder" />
        </div>
        <div class="relative h-full">
          <div
            class="absolute z-10 flex flex-col gap-4 picSecondRelative items-end right-[8%] top-[25%]"
          >
            <h1 class="text-[#1B4B66] text-3xl">Facepacks & Peels</h1>
            <div
              class="h-16 w-16 secondCustomBorder text-[#1B4B66] bg-[#c3ccd2] flex items-center justify-center text-4xl cursor-pointer"
            >
              <el-icon><Right /></el-icon>
            </div>
          </div>
          <el-image src="/src/assets/facepacks_pic.png" class="customBorder" />
        </div>
      </div>
    </div>
  </div>
</template>
