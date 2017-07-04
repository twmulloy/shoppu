import { Component, Input, OnInit } from '@angular/core'

import { ProductService } from './product.service'
import { Product } from './product'

@Component({
  selector: '[product]',
  template: `
    <header>
      <h1>{{product?.name || item.name}}</h1>
    </header>
    <section>
      <dl>
        <dt>Description:</dt>
        <dd>{{product?.description}}</dd>
        <dt>Price:</dt>
        <dd>{{product?.display_price}}</dd>
        <dt>Quantity:</dt>
        <dd>{{product?.total_on_hand}}</dd>
      </dl>
      <button>Buy</button>
    </section>
  `,
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  @Input() item: Product
  @Input() product: Product

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (!this.product) { this.getProduct() }
  }

  getProduct(): void {
    this.productService.getProduct(this.item.id)
      .subscribe(product => this.product = product)
  }
}
