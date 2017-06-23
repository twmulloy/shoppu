import { Component, Input } from '@angular/core'

import { Element } from './element'

@Component({
  selector: '[element]',
  template: `
    <ng-container *ngFor="let ingredient of element?.ingredients">
      <div ingredient [ingredient]="ingredient"></div>
    </ng-container>
  `
})
export class ElementComponent {
  @Input() element: Element
}
