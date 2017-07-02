import { Component, Input, OnInit } from '@angular/core'

import { TaxonomyService } from './taxonomy.service'
import { Taxonomy } from './taxonomy'

@Component({
  selector: 'taxonomy,[taxonomy]',
  template: `
    <header>
      <h1>{{item.name}}</h1>
    </header>
    <section>
      <header>
        <h1>{{taxonomy?.name}}</h1>
      </header>
      <section taxon *ngFor="let taxon of taxonomy?.taxons" [item]="taxon"></section>
    </section>
  `,
  providers: [TaxonomyService]
})
export class TaxonomyComponent implements OnInit {
  @Input() item: Taxonomy
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
