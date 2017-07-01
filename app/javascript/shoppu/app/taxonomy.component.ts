import { Component, Input, OnInit } from '@angular/core'

import { TaxonomyService } from './taxonomy.service'
import { Taxonomy } from './taxonomy'

@Component({
  selector: 'taxonomy',
  template: `
    <pre>{{item | json}}</pre>
    <pre>{{taxonomy | json}}</pre>
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
