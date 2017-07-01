import { Component, Input } from '@angular/core'

import { Element } from './element'

@Component({
  selector: 'element,[element]',
  template: `
    <ng-container *ngFor="let ingredient of element?.ingredients">
      <ingredient [ingredient]="ingredient"></ingredient>
    </ng-container>
  `
})
export class ElementComponent {
  @Input() element: Element
}
