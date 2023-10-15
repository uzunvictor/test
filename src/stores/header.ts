import {ref} from "vue";
import {defineStore} from "pinia";
import type {Tab} from "@/shared/types/tabs";

export const useStoreHeader = defineStore("header", () => {

  // ------------------- state --------------------------->
  const activeTab = ref<Tab>("Products")

  // ------------------- functions ----------------------->
  function setActiveTab(tab: Tab) {
    activeTab.value = tab
  }

  return {
    activeTab,
    setActiveTab,
  }
})