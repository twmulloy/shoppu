import { Component, Input, OnInit } from '@angular/core'

import { ProductService } from './product.service'
import { Product } from './product'

@Component({
  selector: '[product]',
  template: `
    <ng-template #loading>
      Loading {{item.name}}...
    </ng-template>
    <ng-container *ngIf="product; else loading">
      <ng-container *ngIf="variant; else loading">
        <!--<pre>{{variant | json}}</pre>-->
        <header>
          <h1>{{variant.name}}</h1>
        </header>
        <section>
          <dl>
            <dt>Description:</dt>
            <dd>{{variant.description}}</dd>
            <dt>Price:</dt>
            <dd>{{variant.display_price}}</dd>
          </dl>
          <form #f="ngForm" (ngSubmit)="onSubmit(f)">
            <ng-container *ngIf="product.has_variants">
              <select></select>
            </ng-container>
            <ng-container *ngIf="!variant.in_stock">
              <ng-container *ngIf="variant.is_backorderable">
                <input type="number" value="1" min="1" />
                <button type="submit">Backorder</button>
              </ng-container>
              <button *ngIf="!variant.is_backorderable" disabled>Out of Stock</button>
            </ng-container>
            <ng-container *ngIf="variant.in_stock">
              <input *ngIf="variant.total_on_hand > 1" type="number" value="1" min="1" [max]="variant.total_on_hand" />
              <button type="submit">Buy</button>
            </ng-container>
          </form>
        </section>
      </ng-container>
    </ng-container>
  `,
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  @Input() item: Product
  @Input() product: Product
  variant: Product

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (!this.product) { this.getProduct() }
  }

  getProduct(): void {
    this.productService.getProduct(this.item.id)
      .subscribe(product => {
        this.product = product
        this.variant = product.has_variants ? product.variants[0] : product.master
        return this.product
      })
  }

  onSubmit(form): void {
    console.log('submit', form)
  }
}
