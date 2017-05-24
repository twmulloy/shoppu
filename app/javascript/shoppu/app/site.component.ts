import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { SiteService } from './site.service'
import { Site } from './site'

@Component({
  selector: 'site',
  template: `
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
    <page></page>
  `,
  providers: [ SiteService ]
})
export class SiteComponent implements OnInit {
  errorMessage: string
  site: Site

  constructor(
    private siteService: SiteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route)
    this.getSite()
  }

  getSite() {
    this.siteService.getSite().subscribe(
      site => this.site = site,
      error => this.errorMessage = <any>error
    )
  }
}
