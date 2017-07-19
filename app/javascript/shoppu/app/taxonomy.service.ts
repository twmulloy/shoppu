import { Observable } from 'rxjs/Observable'

import { SpreeService } from './spree.service'
import { Taxonomy } from './taxonomy'

export class TaxonomyService extends SpreeService {
  public getTaxonomy(id: number): Observable<Taxonomy> {
    const url = [
      this.env.spree.root_url,
      this.env.routes.spree_api_v1_taxonomy_path(id)
    ].join('')

    return this.get(url).map(res => res.json().root as Taxonomy)
  }
}
