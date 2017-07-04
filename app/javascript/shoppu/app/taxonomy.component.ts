import { Component, Input, OnInit } from '@angular/core'

import { TaxonomyService } from './taxonomy.service'
import { Taxonomy } from './taxonomy'
import { Page } from './page'

@Component({
  selector: '[taxonomy]',
  template: `
    <ng-template #loading>
      Loading {{item.name}}...
    </ng-template>
    <ng-container *ngIf="taxonomy; else loading">
      <header>
        <h1>{{taxonomy.name}}</h1>
      </header>
      <section
        *ngFor="let taxon of taxonomy.taxons"
        taxon
        [item]="taxon"
        [pages]="pages"
      ></section>
    </ng-container>
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
