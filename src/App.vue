<template lang="pug">
.main-layout(@resize="setIsDesktop")
  header
    TheHeader
  RouterView
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useStoreHeader} from "@/stores/header";
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from "@/shared/components/TheHeader.vue";

// ------------------- functions ----------------------->
const { setIsDesktop } = useStoreHeader()

// ------------------- hooks ---------------------------->
onMounted(() => {
  setIsDesktop()
  window.addEventListener('resize', setIsDesktop)
})

</script>

<style lang="scss" scoped>
.main-layout {
  min-height: calc(100vh - 96px);
}
</style>
