import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Page } from './page'

@Injectable()
export class PageService {
  private baseUrl = 'api'

  constructor (private http: Http) {}

  getPage(segments: Array<any>, root?: Page): Observable<Page> {
    const isAdminRoute: boolean = !!segments.find(segment => segment.path === 'admin')
    let path: string = segments.map(segment => segment.path).join('/')
    let url = [ this.baseUrl ]

    if (!isAdminRoute) { url.push('pages') }

    if (path) {
      url.push(path)
    } else {
      if (root && root.urlname) {
        url.push(root.urlname)
      }
    }

    path = url.join('/')

    return this.http.get(path).map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json()
  }
}
