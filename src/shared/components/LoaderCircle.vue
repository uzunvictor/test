<template lang="pug">
.container__loader(v-if="!!props.center")
  .loader
.loader(v-else)
</template>

<script setup lang="ts">
import {computed} from "vue";
import {Color} from "@/shared/constants/color";

// ------------------- props --------------------------->
interface Props {
  center ?: boolean
  color  ?: Color
  size   ?: number
}
const props = defineProps<Props>()

// ------------------- computed ------------------------>
const loaderColor = computed(() => props.color? props.color : Color.WHITE)
const loaderSize  = computed(() => !!props.size? `${props.size}px` : '48px')
</script>

<style lang="scss" scoped>
.container__loader {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  animation: fade 0.3s ease-in-out;
}

.loader {
  width: v-bind(loaderSize);
  height: v-bind(loaderSize);
  border: 5px solid v-bind(loaderColor);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>