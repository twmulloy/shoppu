import { Component, Input } from '@angular/core'

import { Order } from './order'

@Component({
  selector: 'cart,[cart]',
  template: `
    <ng-template #loading>
      Loading...
    </ng-template>
    <ng-container *ngIf="order; else loading">
      <pre>{{order | json}}</pre>
    </ng-container>
  `
})
export class CartComponent {
  @Input() order: Order
}
