import { Injectable, Inject } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { EnvService } from './env.service'
import { Env } from './env'

import { Site } from './site'

@Injectable()
export class SiteService {
  private env: Env

  constructor(
    @Inject(EnvService) private envService,
    private http: Http
  ) {
    this.env = this.getEnv()
  }

  getSite(): Observable<Site> {
    const url = this.env.routes.alchemy_api_page_path('nested')
    return this.http.get(url).map(this.extractData)
  }

  private getEnv(): Env {
    return this.envService.getEnv()
  }

  private extractData(res: Response) {
    return res.json()
  }
}
