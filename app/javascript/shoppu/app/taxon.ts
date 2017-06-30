import { Product } from './product'

export interface Taxon {
  id: number,
  products?: Array<Product>
}
