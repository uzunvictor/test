<template lang="pug">
.page-container
  Suspense
    template(#fallback) Loading...
    ProductsGrid
</template>

<script setup lang="ts">
import {defineAsyncComponent} from "vue";

// ------------------- components ---------------------->
const ProductsGrid = defineAsyncComponent(() => import('@/shared/components/ProductsGrid.vue'))
</script>

<style lang="scss" scoped>
.page-container {
  border-radius: 24px;
  overflow: hidden;
}
</style>