<template lang="pug">
.product-card
  .product-card__image
    ProductImage(
      :name="image"
      :color="color"
    )
  .product-card__title
    button(:class="{interstellar: color === Color.INTERSTELLAR_GREY}") {{title}}
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
const btnHoverColor = computed(() => {
  if(color.value === Color.DEEP_BLUE)    return Color.DEEP_BLUE_DARK
  if(color.value === Color.FLORAL_GREEN) return Color.FLORAL_GREEN_DARK
  if(color.value === Color.SUNNY_ORANGE) return Color.SUNNY_ORANGE_DARK
  return Color.WHITE
})
const btnHoverBgColor = computed(() => {
  if(color.value === Color.DEEP_BLUE)    return Color.DEEP_BLUE_MEDIUM
  if(color.value === Color.FLORAL_GREEN) return Color.FLORAL_GREEN_MEDIUM
  if(color.value === Color.SUNNY_ORANGE) return Color.SUNNY_ORANGE_MEDIUM
  return Color.VIOLET
})
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
    color: v-bind(color);
    text-align: center;
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
    margin-top: 12px;

    button {
      cursor: pointer;
      width: 256px;
      height: 56px;
      background-color: v-bind(bgColor);
      color: v-bind(color);
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      border: 2px solid transparent;
      border-radius: 16px;
      outline: none;
      &:hover {
        background-color: v-bind(btnHoverBgColor);
        color: v-bind(btnHoverColor);
      }
      &:focus-visible {
        background-color: v-bind(bgColor);
        color: v-bind(color);
        border-color: v-bind(color);
        &.interstellar {
          border-color: $violet;
          color: $white;
        }
      }
    }
  }
}
</style>