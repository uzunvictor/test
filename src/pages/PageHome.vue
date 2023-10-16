<template lang="pug">
.page-home
  Suspense(v-if="activeTab === 'Products' || isDesktop")
    template(#fallback)
      LoaderCircle(center :color="Color.FLORAL_GREEN_LIGHT")
    ProductsGrid
  FeedbackForm(v-if="activeTab === 'Feedback' || isDesktop")
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {computed, defineAsyncComponent, ref} from "vue";
import {Color} from "@/shared/constants/color";
import {useStoreHeader} from "@/stores/header";
import LoaderCircle from "@/shared/components/LoaderCircle.vue";

// ------------------- state --------------------------->
const { activeTab, isDesktop } = storeToRefs(useStoreHeader())

// ------------------- components ---------------------->
const ProductsGrid = defineAsyncComponent(() => import('@/shared/components/ProductsGrid.vue'))
const FeedbackForm = defineAsyncComponent(() => import('@/shared/components/FeedbackForm.vue'))
</script>

<style lang="scss" scoped>
.page-home {
  min-height: calc(100vh - 160px);
  display: flex;

  @media (max-width: 1439.99px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>