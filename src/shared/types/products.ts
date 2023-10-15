import type {Image} from "@/shared/constants/image";
import type {Color} from "@/shared/constants/color";

export type Product = {
  id           : number
  bgColor      : Color
  color        : Color
  description  : string
  image        : Image
  title        : string
}