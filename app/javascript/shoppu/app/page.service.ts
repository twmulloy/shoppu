import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Page } from './page'

@Injectable()
export class PageService {
  private baseUrl = 'api/pages'

  constructor (private http: Http) {}

  getPage(segments: Array<any>): Observable<Page> {
    const path = segments.map(segment => segment.path).join('/')
    const url = [this.baseUrl, path].join('/')
    return this.http.get(url)
      .map(this.extractData)
  }

  private extractData(res: Response) {
    let body = res.json()
    return body || {}
  }
}
