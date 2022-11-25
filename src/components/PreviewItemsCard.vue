<script lang="ts" setup>
import { handbagsView } from "../modules/ProductHelper";
import { addItemToBasket } from "../modules/Basket";
import {
  addItemToWishlist,
  hasActiveHeart,
  removeItemFromWishlist,
} from "../modules/Wishlist";
import { scrollToTop } from "../modules/UtilityHelper";

const props = defineProps({
  item: {
    type: Object as () => handbagsView,
    required: true,
  },
});

const heartActive = computed(() => {
  if (props.item != null) return hasActiveHeart(props.item);
});

const clickActiveHeart = () => {
  if (heartActive.value === true) {
    removeItemFromWishlist(props.item);
  } else {
    addItemToWishlist(props.item);
  }
};

const value = ref(5);
</script>
<template>
  <div class="main-div--PreviewItemCard" v-if="props.item != null">
    <el-card :body-style="{ padding: '0px' }">
      <img
        :src="props.item.src"
        class="w-full h-full cursor-pointer"
        @click="$router.push(props.item.url), scrollToTop()"
      />
      <div class="p-5 flex flex-col gap-3 justify-between">
        <div class="flex justify-between">
          <h1 class="text-[#171520] font-bold text-2xl">
            {{ props.item.title }}
          </h1>
          <font-awesome-icon
            icon="fa-regular fa-heart"
            class="h-8 text-[#13101E] HeartClass cursor-pointer"
            :class="{ activeColorHeart: heartActive }"
            id="Heart"
            @click="clickActiveHeart()"
          />
        </div>
        <span class="text-[#626262]">{{ props.item.name }}</span>
        <div class="flex items-center gap-4 divRate">
          <el-rate v-model="value" disabled size="large" />
          <span class="text-[#1B4B66] font-bold pt-[0.625rem]">{{
            props.item.rate
          }}</span>
        </div>
        <div class="flex gap-4 text-xl">
          <h1 class="text-[#171520] font-bold">
            {{ "$" + props.item.cost }}
          </h1>
          <span class="line-through text-[#626262]">{{
            props.item.costOld
          }}</span>
          <span class="text-[#ff0000] whitespace-nowrap">{{
            props.item.sale
          }}</span>
        </div>
        <el-button @click="addItemToBasket(props.item, 1)"
          ><div class="flex gap-4 items-center text-xl text-[#1B4B66]">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" /><span
              >Add to bag</span
            >
          </div></el-button
        >
      </div></el-card
    >
  </div>
</template>
