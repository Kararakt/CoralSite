<script lang="ts" setup>
const visible = ref(false);
</script>
<template>
  <div @click="visible = !visible"><slot name="header"></slot></div>
  <div v-if="visible"><slot></slot></div>
</template>
