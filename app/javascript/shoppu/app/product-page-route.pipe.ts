import { Pipe, PipeTransform } from '@angular/core'

import { Product } from './product'
import { Page } from './page'

interface Item {
  [prop: string]: any
}

@Pipe({
  name: 'productPageRoute'
})
export class ProductPageRoutePipe implements PipeTransform {
  private item: Item = {}

  transform(product: Product, pages: Page[]): Item {
    if (product.id && Array.isArray(pages)) {
      this.item = pages.find(
        page => !!page.elements.find(
          element => !!element.ingredients.find(
            ingredient => ingredient.name === 'spree_product' && ingredient.value.id === product.id
          )
        )
      ) || {
        urlname: product.slug
      } as Item
    }
    return this.item
  }
}
