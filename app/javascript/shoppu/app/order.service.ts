import { Observable } from 'rxjs/Observable'

import { SpreeService } from './spree.service'
import { Order } from './order'

export class OrderService extends SpreeService {
  public getCurrentOrder(): Observable<Order> {
    const url = [
      this.env.spree.root_url,
      this.env.routes.spree_api_v1_current_order_path()
    ].join('')

    return this.get(url).map(this.extractData)
  }
}
