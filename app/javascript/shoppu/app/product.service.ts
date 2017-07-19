import { Observable } from 'rxjs/Observable'

import { SpreeService } from './spree.service'
import { Product } from './product'

export class ProductService extends SpreeService {
  public getProduct(id: number): Observable<Product> {
    const url = [
      this.env.spree.root_url,
      this.env.routes.spree_api_v1_product_path(id)
    ].join('')

    return this.get(url).map(this.extractData)
  }
}
