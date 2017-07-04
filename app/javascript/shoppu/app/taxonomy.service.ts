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

import { Taxonomy } from './taxonomy'

@Injectable()
export class TaxonomyService {
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

  private extractWrappedData(res: Response) {
    return res.json().root as Taxonomy
  }

  getTaxonomy(id: number): Observable<Taxonomy> {
    const url = [
      this.env.spree.root_url,
      this.env.routes.spree_api_v1_taxonomy_path(id)
    ].join('')
    const options: RequestOptionsArgs = {
      headers: new Headers({
        [this.env.spree.key.param]: this.env.spree.key.token
      })
    }
    return this.http.get(url, options).map(this.extractWrappedData)
  }
}
