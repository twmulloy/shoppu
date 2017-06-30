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
      <ng-container *ngSwitchCase="'spree_taxonomy'">
        <div taxonomy [item]="ingredient.value"></div>
      </ng-container>
      <ng-container *ngSwitchCase="'spree_taxon'">
        <div taxon [item]="ingredient.value"></div>
      </ng-container>
      <ng-container *ngSwitchCase="'spree_product'">
        <div product [item]="ingredient.value"></div>
      </ng-container>
    </ng-container>
  `
})
export class IngredientComponent {
  @Input() ingredient: Ingredient
}
