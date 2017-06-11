import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Site } from './site'

@Injectable()
export class SiteService {
  private siteUrl = 'api/pages/nested'

  constructor (private http: Http) {}

  getSite(): Observable<Site> {
    return this.http.get(this.siteUrl)
      .map(this.extractData)
  }

  private extractData(res: Response) {
    return res.json()
  }
}
