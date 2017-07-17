import { Component, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'cart,[cart]',
  template: `
    <ol>
      <li>A Product</li>
    </ol>
  `
})
export class CartComponent implements OnChanges {
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
}
