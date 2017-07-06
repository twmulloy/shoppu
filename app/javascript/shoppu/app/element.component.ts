import { Component, Input } from '@angular/core'

import { Element } from './element'
import { Page } from './page'

@Component({
  selector: '[element]',
  template: `
    <div
      *ngFor="let ingredient of item.ingredients"
      ingredient
      [item]="ingredient"
      [pages]="pages"
    ></div>
  `
})
export class ElementComponent {
  @Input() item: Element
  @Input() pages: Page[]
}
