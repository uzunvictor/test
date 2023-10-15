import {computed, ref} from "vue"
import {defineStore} from "pinia"
import {Image} from "@/shared/constants/image"
import type {Product} from "@/shared/types/product"

export const useStoreProducts = defineStore('products', () => {

  // ------------------- state --------------------------->
  const ref_products = ref<Product[]>([])

  // ------------------- getters ------------------------->
  const products = computed(() => ref_products.value)

  // ------------------- functions ----------------------->
  async function refreshProducts() {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      ref_products.value = [
        {id: 1, bgColor: '', description: 'Sunny Orange',      image: Image.HELICOPTER, title: 'myProduct'},
        {id: 2, bgColor: '', description: 'Deep Blue',         image: Image.AIRPLANE,   title: 'myProduct Plus'},
        {id: 3, bgColor: '', description: 'Floral Green',      image: Image.ROCKET,     title: 'myProduct Pro'},
        {id: 4, bgColor: '', description: 'Interstellar Grey', image: Image.UFO,        title: 'myProduct Ultra'},
        {id: 5, bgColor: '', description: 'Floral Green',      image: Image.AIRPLANE,   title: 'myProduct Pro'},
        {id: 6, bgColor: '', description: 'Deep Blue',         image: Image.ROCKET,     title: 'myProduct'},
        {id: 7, bgColor: '', description: 'Deep Blue',         image: Image.UFO,        title: 'myProduct Pro'},
        {id: 8, bgColor: '', description: 'Sunny Orange',      image: Image.HELICOPTER, title: 'myProduct Plus'},
        {id: 9, bgColor: '', description: 'Floral Green',      image: Image.AIRPLANE,   title: 'myProduct'},
      ]
    }
    catch (e) {
      console.error(e)
    }
  }

  return {
    refreshProducts,
    products,
  }
})