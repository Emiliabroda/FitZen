import { Producto } from "./producto"

export interface Categoria {
nombre: string
id: number
imgUrl: string
producto: Producto []
}