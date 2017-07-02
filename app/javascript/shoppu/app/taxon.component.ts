import { Component, Input, OnInit } from '@angular/core'

import { TaxonService } from './taxon.service'
import { Taxon } from './taxon'

@Component({
  selector: 'taxon,[taxon]',
  template: `
    <header>
      <h1>{{item.name}}</h1>
    </header>
    <section>
      <ol>
        <li *ngFor="let product of taxon?.products">
          <dl>
            <dt>Name:</dt>
            <dd><a routerLink="">{{product.name}}</a></dd>
            <dt>Price:</dt>
            <dd>{{product.display_price}}</dd>
          </dl>
        </li>
      </ol>
    </section>
  `,
  providers: [TaxonService]
})
export class TaxonComponent implements OnInit {
  @Input() item: Taxon
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
