import { Injectable, Inject } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { EnvService } from './env.service'
import { Env } from './env'

import { Page } from './page'

@Injectable()
export class PageService {
  private env: Env

  constructor(
    @Inject(EnvService) private envService,
    private http: Http
  ) {
    this.env = this.getEnv()
  }

  getPage(segments: Array<any>, root?: Page): Observable<Page> {
    let path: string = segments.map(segment => segment.path).join('/')
    let url: string
    let pageId: number | string

    if (this.isAdminRoute(segments)) {
      pageId = segments.pop().path
      url = this.env.routes['alchemy_api_preview_page_path'](pageId)
    } else if (path) {
      url = this.env.routes['alchemy_api_page_path'](path)
    } else if (root && root.urlname) {
      url = this.env.routes['alchemy_api_page_path'](root.urlname)
    }

    return this.http.get(url).map(this.extractData)
  }

  private getEnv(): Env {
    return this.envService.getEnv()
  }

  private isAdminRoute(segments: Array<any>): boolean {
    return !!segments.find(segment => segment.path === 'admin')
  }

  private extractData(res: Response) {
    return res.json()
  }
}
