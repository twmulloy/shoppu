import { Observable } from 'rxjs/Observable'

import { SpreeService } from './spree.service'
import { Taxon } from './taxon'

export class TaxonService extends SpreeService {
  public getTaxonProducts(id: number): Observable<Taxon> {
    const url = [
      this.env.spree.root_url,
      this.env.routes.spree_api_v1_taxon_products_path()
    ].join('')

    return this.get(url, { id }).map(this.extractData)
  }
}
