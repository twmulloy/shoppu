import { Observable } from 'rxjs/Observable'

import { SpreeService } from './spree.service'
import { Order } from './order'
import { LineItem } from './line-item'

export class OrderService extends SpreeService {
  public getCurrentOrder(): Observable<Order> {
    const url = this.buildUrl('spree_api_v1_current_order_path')
    return this.get(url).map(this.extractData)
  }

  public new(): Observable<Order> {
    const url = this.buildUrl('spree_api_v1_orders_path')
    return this.post(url).map(this.extractData)
  }

  public addLineItem(orderId: string, lineItem: LineItem): Observable<LineItem> {
    const url = this.buildUrl('spree_api_v1_order_line_items_path', orderId)
    return this.post(url, lineItem).map(this.extractData)
  }
}
