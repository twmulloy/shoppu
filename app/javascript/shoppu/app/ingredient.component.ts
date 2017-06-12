import { Component, Input } from '@angular/core'

import { Ingredient } from './ingredient'

@Component({
  selector: 'ingredient',
  template: `
    <div [ngSwitch]="ingredient.name">
      <div *ngSwitchCase="'headline'">
        <h2>{{ingredient.value}}</h2>
      </div>
      <div *ngSwitchCase="'text'">
        <div [innerHTML]="ingredient.value"></div>
      </div>
    </div>
  `
})
export class IngredientComponent {
  @Input() ingredient: Ingredient
}
