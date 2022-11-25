<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="h-screen mainDivApp">
    <Header />
    <RouterView class="contentRouter"></RouterView>
    <Footer />
  </div>
</template>
