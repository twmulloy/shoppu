import { Observable } from 'rxjs/Observable'

import { SpreeService } from './spree.service'
import { Product } from './product'

export class ProductService extends SpreeService {
  public getProduct(id: number): Observable<Product> {
    const url = this.buildUrl('spree_api_v1_product_path', id)
    return this.get(url).map(this.extractData)
  }
}
