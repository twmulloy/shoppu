import { Injectable, Inject } from '@angular/core'
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { EnvService } from './env.service'
import { Env } from './env'

@Injectable()
export abstract class SpreeService {
  protected env: Env
  protected baseUrl: string

  constructor(
    @Inject(EnvService) private envService,
    private http: Http
  ) {
    this.env = this.getEnv()
    this.baseUrl = this.env.spree.root_url
  }

  private getEnv(): Env {
    return this.envService.getEnv()
  }

  private get headers(): Headers {
    return new Headers({
      [this.env.spree.key.param]: this.env.spree.key.token
    })
  }

  protected buildUrl(routeHelper: string, params?: any) {
    const route = this.env.routes[routeHelper]
    if (typeof route !== 'function') {
      throw new ReferenceError(`${routeHelper} route not found`)
    }
    return [this.baseUrl, route(params)].join('')
  }

  protected extractData(res: Response) {
    return res.json()
  }

  protected get(url: string, params?: object): Observable<any> {
    // TODO: DRY
    const options: RequestOptionsArgs = {
      headers: this.headers,
      params
    }
    return this.http.get(url, options)
  }

  protected post(url: string, body?: object, params?: object): Observable<any> {
    // TODO: DRY
    const options: RequestOptionsArgs = {
      headers: this.headers,
      params
    }
    return this.http.post(url, body, options)
  }
}
