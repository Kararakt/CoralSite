<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
const textInputHeader = ref("");
function activeHeader() {
  document.getElementById("header")!.classList.toggle("active");
  document.getElementById("menu")!.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

document.onclick = function (e: any) {
  if (e.target.id !== "header" && e.target.id !== "menu") {
    document.getElementById("header")!.classList.remove("active");
    document.getElementById("menu")!.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
};
</script>
<template>
  <div class="container mx-auto flex justify-between px-4">
    <h1 class="text-[#17494D] font-bold text-[3.5rem] leading-normal">
      CORA'L
    </h1>
    <div class="flex items-center gap-10" id="menu">
      <ul class="flex gap-5 items-center text-[#171520] text-xl">
        <li><router-link to="/Handbags">Handbags</router-link></li>
        <li><router-link to="/Watcher">Watcher</router-link></li>
        <li><router-link to="/Skincare">Skincare</router-link></li>
        <li><router-link to="/Jewellery">Jewellery</router-link></li>
        <li><router-link to="/Apparels">Apparels</router-link></li>
        <li class="cursor-pointer">
          <el-image
            src="/src/assets/heart.svg"
            @click="$router.push('/Wishlist')"
          />
        </li>
        <li class="cursor-pointer">
          <el-image
            src="/src/assets/user.svg"
            @click="$router.push('/Profile')"
          />
        </li>
        <li class="cursor-pointer">
          <el-image
            src="/src/assets/shoppingCart.svg"
            @click="$router.push('/MyCart')"
          />
        </li>
      </ul>
    </div>
  </div>
  <div id="header" @click="activeHeader()"></div>
</template>
