import { Component, Input } from '@angular/core'

import { Ingredient } from './ingredient'

@Component({
  selector: '[ingredient]',
  template: `
    <ng-container [ngSwitch]="ingredient.name">
      <ng-container *ngSwitchCase="'headline'">
        <h2>{{ingredient.value}}</h2>
      </ng-container>
      <ng-container *ngSwitchCase="'text'">
        <div [innerHTML]="ingredient.value"></div>
      </ng-container>
      <ng-container *ngSwitchCase="'spree_product'">
        <pre>{{ingredient.value | json}}</pre>
      </ng-container>
      <ng-container *ngSwitchCase="'spree_taxon'">
        <pre>{{ingredient.value | json}}</pre>
      </ng-container>
    </ng-container>
  `
})
export class IngredientComponent {
  @Input() ingredient: Ingredient
}
