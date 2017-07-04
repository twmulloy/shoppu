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
  private item: Item

  transform(product: Product, pages: Page[]): Item {
    let item, page
    if (product.slug) {
      item = { urlname: product.slug }
    }

    if (product.id && Array.isArray(pages)) {
      page = pages.find(
        page => !!page.elements.find(
          element => !!element.ingredients.find(
            ingredient => ingredient.name === 'spree_product' && ingredient.value.id === product.id
          )
        )
      )
    }

    return page || item as Item
  }
}
