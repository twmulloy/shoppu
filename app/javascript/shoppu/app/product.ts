export interface Product {
  id: number,
  name: string,
  description: string,
  price: string,
  display_price: string,
  available_on: string,
  slug: string,
  meta_description: string,
  meta_keywords: string,
  shipping_category_id: number,
  taxon_ids: Array<number>,
  total_on_hand: number,
  master: object,
  variants: Array<any>
}
