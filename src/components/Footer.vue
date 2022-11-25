<script lang="ts" setup>
import { scrollToTop } from "../modules/UtilityHelper";
</script>
<template>
  <div class="bg-[#1B4B66]">
    <div class="container mx-auto flex justify-between py-16 divFooter">
      <div class="flex gap-[5rem] text-lg" id="Footer">
        <ul class="flex flex-col gap-3 text-[#B6B6B6]">
          <li class="text-white">Shop by Category</li>
          <li>Skincare</li>
          <li>Personal Care</li>
          <li>Handbags</li>
          <li>Apparels</li>
          <li>Watches</li>
          <li>Eye Wear</li>
          <li>Jewellery</li>
        </ul>
        <ul class="flex flex-col gap-3 text-[#B6B6B6]">
          <li class="text-white" @click="scrollToTop()">
            <router-link to="/About">About</router-link>
          </li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
        </ul>
        <ul class="flex flex-col gap-3 text-[#B6B6B6]">
          <li class="text-white">Policy</li>
          <li>Return Policy</li>
          <li>Terms of Use</li>
          <li>Sitemap</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>EPR Compliance</li>
        </ul>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex justify-end gap-4 iconFooter">
          <div id="YouTube">
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </div>
          <div id="YouTube">
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </div>
          <div id="YouTube">
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </div>
          <div id="YouTube">
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </div>
        </div>
        <div class="flex items-center justify-end gap-2 textFooter text-white">
          <el-icon :size="30"><Location /></el-icon
          ><span class="text-lg">United States</span>
        </div>
        <span class="text-white footerText text-lg"
          >© 2021 | Cora Leviene All Rights Reserved</span
        >
      </div>
    </div>
  </div>
</template>
