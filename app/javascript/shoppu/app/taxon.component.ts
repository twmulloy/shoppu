import { Component, Input, OnInit } from '@angular/core'

import { TaxonService } from './taxon.service'
import { Taxon } from './taxon'

@Component({
  selector: '[taxon]',
  template: `
    <pre>{{item | json}}</pre>
    <pre>{{taxon | json}}</pre>
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
    this.getTaxon()
  }

  getTaxon(): void {
    this.taxonService.getTaxon(this.item.id).subscribe(taxon => this.taxon = taxon)
  }
}
