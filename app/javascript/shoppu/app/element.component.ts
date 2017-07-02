import { Component, Input } from '@angular/core'

import { Element } from './element'

@Component({
  selector: 'element,[element]',
  template: `
    <div ingredient *ngFor="let ingredient of item?.ingredients" [item]="ingredient"></div>
  `
})
export class ElementComponent {
  @Input() item: Element
}
