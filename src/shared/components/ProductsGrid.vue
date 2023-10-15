<template lang="pug">
.products-grid(v-if="products.length")
  ProductCard(
    v-for="product in products"
    :key="product.id"
    :title="product.title"
    :description="product.description"
    :image="product.image"
    :color="product.color"
    :bgColor="product.bgColor"
  )
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {defineAsyncComponent} from "vue";
import {useStoreProducts} from "@/stores/products";

// ------------------- computed ------------------------>
const { products } = storeToRefs(useStoreProducts())

// ------------------- calls --------------------------->
await useStoreProducts().fetchProducts()

// ------------------- components ---------------------->
const ProductCard = defineAsyncComponent(() => import('@/shared/components/ProductCard.vue'))
</script>

<style lang="scss" scoped>
.products-grid {
  min-height: 100%;
  background-color: $white;
  padding: 32px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  animation: fade 0.3s ease-in-out;

}
</style>