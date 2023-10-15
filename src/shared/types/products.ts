import type {Image} from "@/shared/constants/image";

export type Product = {
  id           : number
  description ?: string
  image       ?: Image
  title       ?: string
}