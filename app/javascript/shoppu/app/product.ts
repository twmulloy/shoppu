export interface Product {
  id: number,
  name: string,
  slug: string,
  description?: string
  price?: string,
  display_price?: string,
  total_on_hand?: number,
  has_variants?: boolean,
  master?: Product,
  variants?: Product[],
  in_stock?: boolean
}
