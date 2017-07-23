import { Component, Input, OnInit } from '@angular/core'

import { ProductService } from './product.service'
import { Product } from './product'
import { OptionValue } from './option'

@Component({
  selector: '[product]',
  template: `
    <ng-template #loading>
      Loading {{item.name}}...
    </ng-template>
    <ng-container *ngIf="product; else loading">
      <!--<pre>{{ product | json }}</pre>-->
      <ng-container *ngIf="variant; else loading">
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
            <ol *ngIf="product.has_variants">
              <li *ngFor="let optionType of product.option_types">
                <label>{{optionType.presentation}}</label>
                <select>
                  <option
                    *ngFor="let optionValue of (optionValues | filter:'option_type_id':optionType.id)"
                    [value]="optionValue.id"
                  >
                    {{optionValue.presentation}}
                  </option>
                </select>
              </li>
            </ol>
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
  public variant: Product
  public optionValues: OptionValue[]

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (!this.product) { this.getProduct() }
  }

  getOptions(): void {
    this.optionValues = []
    this.product.variants.forEach(
      variant => variant.option_values.forEach(
        optionValue => this.optionValues.push(optionValue)
      )
    )
  }

  getProduct(): void {
    this.productService.getProduct(this.item.id)
      .subscribe(product => {
        this.product = product
        this.variant = product.has_variants ? product.variants[0] : product.master
        this.getOptions()
        return this.product
      })
  }

  onSubmit(form): void {
    console.log('submit', form)
  }
}
