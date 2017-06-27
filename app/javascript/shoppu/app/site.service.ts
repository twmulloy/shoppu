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
  private siteUrl: string

  constructor(
    @Inject(EnvService) private envService,
    private http: Http
  ) {
    this.env = this.getEnv()
    this.siteUrl = this.env.routes['alchemy_api_page_path']('nested')
  }

  private getEnv(): Env {
    return this.envService.getEnv()
  }

  getSite(): Observable<Site> {
    return this.http.get(this.siteUrl).map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json()
  }
}
