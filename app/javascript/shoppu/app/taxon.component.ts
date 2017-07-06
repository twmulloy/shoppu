import { Component, Input, OnInit } from '@angular/core'

import { TaxonService } from './taxon.service'
import { Taxon } from './taxon'
import { Page } from './page'

@Component({
  selector: '[taxon]',
  template: `
    <header>
      <h1>{{item.name}}</h1>
    </header>
    <section>
      <ol>
        <ng-template #loading>
          Loading {{item.name}}...
        </ng-template>
        <ng-container *ngIf="taxon; else loading">
          <li *ngFor="let product of taxon.products">
            <dl>
              <dt>Name:</dt>
              <dd><a routerLink="/{{(product | productPageRoute:pages).urlname}}">{{product.name}}</a></dd>
              <dt>Price:</dt>
              <dd>{{product.display_price}}</dd>
            </dl>
          </li>
        </ng-container>
      </ol>
    </section>
  `,
  providers: [TaxonService]
})
export class TaxonComponent implements OnInit {
  @Input() item: Taxon
  @Input() pages: Page[]
  taxon: Taxon

  constructor(
    private taxonService: TaxonService
  ) {}

  ngOnInit(): void {
    this.getTaxonProducts()
  }

  getTaxonProducts(): void {
    this.taxonService.getTaxonProducts(this.item.id)
      .subscribe(taxon => this.taxon = taxon)
  }
}
