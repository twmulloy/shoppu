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
      <div *ngSwitchCase="'spree_product'">
        <pre>{{ingredient.value | json}}</pre>
      </div>
      <div *ngSwitchCase="'spree_taxon'">
        <pre>{{ingredient.value | json}}</pre>
      </div>
    </div>
  `
})
export class IngredientComponent {
  @Input() ingredient: Ingredient
}
