import { Component, Input, OnInit } from '@angular/core'

import { TaxonomyService } from './taxonomy.service'
import { Taxonomy } from './taxonomy'
import { Page } from './page'

@Component({
  selector: '[taxonomy]',
  template: `
    <header>
      <h1>{{taxonomy?.name}}</h1>
    </header>
    <section
      *ngFor="let taxon of taxonomy?.taxons"
      taxon
      [item]="taxon"
      [pages]="pages"
    ></section>
  `,
  providers: [TaxonomyService]
})
export class TaxonomyComponent implements OnInit {
  @Input() item: Taxonomy
  @Input() pages: Page[]
  taxonomy: Taxonomy

  constructor(
    private taxonomyService: TaxonomyService
  ) {}

  ngOnInit(): void {
    this.getTaxonomy()
  }

  getTaxonomy(): void {
    this.taxonomyService.getTaxonomy(this.item.id)
      .subscribe(taxonomy => this.taxonomy = taxonomy)
  }
}
