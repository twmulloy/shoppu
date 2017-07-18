import { Component, Input } from '@angular/core'

import { Ingredient } from './ingredient'
import { Page } from './page'

@Component({
  selector: '[ingredient]',
  template: `
    <ng-container [ngSwitch]="item.name">
      <h2 *ngSwitchCase="'headline'">{{item.value}}</h2>
      <div *ngSwitchCase="'text'" [innerHTML]="item.value"></div>
      <!--<div *ngSwitchCase="'youtube_id'" video [item]="item"></div>-->
      <div *ngSwitchCase="'spree_taxonomy'"
        taxonomy
        [item]="item.value"
        [pages]="pages"
      ></div>
      <div *ngSwitchCase="'spree_taxon'"
        taxon
        [item]="item.value"
        [pages]="pages"
      ></div>
      <div *ngSwitchCase="'spree_product'"
        product
        [item]="item.value"
      ></div>
    </ng-container>
  `
})
export class IngredientComponent {
  @Input() item: Ingredient
  @Input() pages: Page[]
}
