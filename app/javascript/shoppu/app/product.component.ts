import { Component, Input, OnInit } from '@angular/core'

import { ProductService } from './product.service'
import { Product } from './product'

@Component({
  selector: '[product]',
  template: `
    <pre>{{item | json}}</pre>
    <pre>{{product | json}}</pre>
  `,
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  @Input() item: Product
  product: Product

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    this.productService.getProduct(this.item.id)
      .subscribe(product => this.product = product)
  }
}
