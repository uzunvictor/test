import {ref} from "vue";
import {defineStore} from "pinia";
import type {Tab} from "@/shared/types/tabs";

export const useStoreHeader = defineStore("header", () => {

  // ------------------- state --------------------------->
  const activeTab = ref<Tab>("Products")
  const isDesktop = ref(window.innerWidth > 1439.99)


  // ------------------- functions ----------------------->
  function setActiveTab(tab: Tab) {
    if(window.innerWidth > 1439.99) activeTab.value = "Products"
    else activeTab.value = tab
  }
  function setIsDesktop() {
    isDesktop.value = window.innerWidth > 1439.99
  }

  return {
    activeTab,
    isDesktop,
    setActiveTab,
    setIsDesktop,
  }
})