import { Component, Input } from '@angular/core'

import { Element } from './element'

@Component({
  selector: 'element',
  template: `
    <div *ngFor="let ingredient of element?.ingredients">
      <ingredient [ingredient]="ingredient"></ingredient>
    </div>
  `
})
export class ElementComponent {
  @Input() element: Element
}
