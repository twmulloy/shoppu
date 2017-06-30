import { Injectable, Inject } from '@angular/core'
import {
  Http,
  Response,
  RequestOptionsArgs,
  Headers
} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { EnvService } from './env.service'
import { Env } from './env'

import { Product } from './product'

@Injectable()
export class ProductService {
  private env: Env

  constructor(
    @Inject(EnvService) private envService,
    private http: Http
  ) {
    this.env = this.getEnv()
  }

  private getEnv(): Env {
    return this.envService.getEnv()
  }

  getProduct(id: number): Observable<Product> {
    const url = [
      this.env.spree.root_url,
      this.env.routes.spree_api_v1_product_path(id)
    ].join('')
    const options: RequestOptionsArgs = {
      headers: new Headers({
        [this.env.spree.key.param]: this.env.spree.key.token
      })
    }
    return this.http.get(url, options).map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json()
  }
}
