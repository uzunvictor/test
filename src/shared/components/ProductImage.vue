<template lang="pug">
.image
  span.font_icon(
    :class="name || ''"
  )
</template>

<script setup lang="ts">
import {computed} from "vue";
import type {Image} from "@/shared/constants/image";
import type {Color} from "@/shared/constants/color";

// ------------------- props --------------------------->
interface Props {
  color : Color
  name  : Image
}
const props = defineProps<Props>()

// ------------------- computed ------------------------>
const color = computed(() => props.color || '$text_grey_light')
</script>

<style lang="scss" scoped>
.image {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    span {
      &.font_icon{
        &:before{
          color: v-bind(color);
          font-size: 224px;
        }
      }
    }
}
</style>