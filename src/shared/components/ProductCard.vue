<template lang="pug">
.product-card
  .product-card__image
    ProductImage(
      :name="image"
      :color="color"
    )
  .product-card__title {{title}}
  .product-card__description {{description}}
</template>

<script setup lang="ts">
import {computed} from "vue";
import {Image} from "@/shared/constants/image";
import {Color} from "@/shared/constants/color";
import ProductImage from "@/shared/components/ProductImage.vue";

// ------------------- props --------------------------->
interface Props {
  bgColor     : string
  color       : Color
  description : string
  image       : Image
  title       : string
}
const props = defineProps<Props>()

// ------------------- computed ------------------------>
const bgColor = computed(() => props.bgColor || Color.WHITE)
const color   = computed(() => props.color || Color.TEXT_GREY_LIGHT)
const image   = computed(() => props.image || Image.DEFAULT)
</script>

<style lang="scss" scoped>
.product-card {
  background-color: v-bind(bgColor);
  width: 288px;
  height: 380px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;

  &__description {
    margin-top: 12px;
    color: v-bind(color);
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  &__image {
    width: 224px;
    height: 224px;
  }

  &__title {
    margin-top: 24px;
    color: v-bind(color);
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
}
</style>