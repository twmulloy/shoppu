import { Injectable, Inject } from '@angular/core'
import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { EnvService } from './env.service'
import { Env } from './env'

@Injectable()
export abstract class SpreeService {
  protected env: Env

  constructor(
    @Inject(EnvService) private envService,
    private http: Http
  ) {
    this.env = this.getEnv()
  }

  private getEnv(): Env {
    return this.envService.getEnv()
  }

  private get headers(): Headers {
    return new Headers({
      [this.env.spree.key.param]: this.env.spree.key.token
    })
  }

  protected extractData(res: Response) {
    return res.json()
  }

  protected get(url: string, params?: object): Observable<any> {
    const options: RequestOptionsArgs = {
      headers: this.headers,
      params
    }

    return this.http.get(url, options)
  }
}
