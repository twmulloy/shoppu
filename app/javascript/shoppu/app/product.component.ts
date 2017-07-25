import { Component, Input, OnInit } from '@angular/core'

import { LineItem } from './line-item'
import { OptionValue } from './option'
import { OrderService } from './order.service'
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
              <li *ngFor="let optionType of product.option_types; let i = index">
                <label>{{optionType.presentation}}</label>
                <select
                  [name]="optionType.name"
                  [(ngModel)]="selectedOptions[i]"
                  (ngModelChange)="onSelectOptionChange($event)"
                >
                  <option
                    *ngFor="let optionValue of optionValues[i]"
                    [ngValue]="optionValue"
                  >
                    {{optionValue.presentation}}
                  </option>
                </select>
              </li>
            </ol>
            <ng-container *ngIf="!variant.in_stock">
              <ng-container *ngIf="variant.is_backorderable">
                <input
                  type="number"
                  name="line_item[quantity]"
                  [(ngModel)]="lineItem.quantity"
                  min="1"
                  required
                  minlength="1"
                />
                <button type="submit" [disabled]="!lineItem.variant_id">Backorder</button>
              </ng-container>
              <button *ngIf="!variant.is_backorderable" disabled>Out of Stock</button>
            </ng-container>
            <ng-container *ngIf="variant.in_stock">
              <input
                *ngIf="variant.total_on_hand > 1"
                type="number"
                name="line_item[quantity]"
                [(ngModel)]="lineItem.quantity"
                min="1"
                [max]="variant.total_on_hand"
                required
                minlength="1"
              />
              <button type="submit" [disabled]="!lineItem.variant_id">Buy</button>
            </ng-container>
          </form>
        </section>
      </ng-container>
    </ng-container>
  `,
  providers: [
    ProductService,
    OrderService
  ]
})
export class ProductComponent implements OnInit {
  @Input() item: Product
  @Input('product') _product: Product
  public _variant: Product
  public optionValues: Array<any>
  public selectedOptions: OptionValue[]
  public lineItem: LineItem = {
    variant_id: undefined,
    quantity: 1
  }

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    if (!this.product) { this.getProduct() }
  }

  get product(): Product {
    return this._product
  }

  set product(data: Product) {
    if (data) {
      this._product = data
      this.variant = data.has_variants
        ? data.variants[0]
        : data.master
      this.getOptions()
    }
  }

  get variant(): Product {
    return this._variant
  }

  set variant(data: Product) {
    if (data) {
      this._variant = data
      this.lineItem.variant_id = data.id
    } else {
      this.lineItem.variant_id = undefined
    }
  }

  getOptions(): void {
    const optionTypes = this.product.option_types
    this.optionValues = new Array(optionTypes.length)

    this.product.variants.forEach(
      variant => variant.option_values.forEach(
        (optionValue, i) => {
          if (typeof this.optionValues[i] === 'undefined') {
            this.optionValues[i] = [] as OptionValue[]
          }

          const existingOptionValue = this.optionValues[i].find(
            v => v.id === optionValue.id
          )

          if (typeof existingOptionValue === 'undefined') {
            this.optionValues[i].push(optionValue)
          }
        }
      )
    )

    // Set each selected option to first option value
    this.selectedOptions = this.optionValues.map(optionValue => optionValue[0])
  }

  getProduct(): void {
    this.productService.getProduct(this.item.id)
      .subscribe(product => this.product = product)
  }

  onSubmit(form): void {
    console.log('submit', form, this.lineItem)
  }

  onSelectOptionChange(): void {
    this.variant = this.product.variants.find(
      variant => variant.option_values.map(
        (optionValue, i) => optionValue.id === this.selectedOptions[i].id
      )
      .every(value => value)
    )
  }
}
