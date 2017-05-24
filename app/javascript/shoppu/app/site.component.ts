import { Component, OnInit } from '@angular/core'

import { SiteService } from './site.service'
import { Site } from './site'

@Component({
  selector: 'site',
  template: `
    <h1>Shoppu</h1>
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
    <page></page>
  `,
  providers: [ SiteService ]
})
export class SiteComponent implements OnInit {
  errorMessage: string
  site: Site

  constructor(private siteService: SiteService) {}

  ngOnInit() { this.getSite() }

  getSite() {
    this.siteService.getSite().subscribe(
      site => this.site = site,
      error => this.errorMessage = <any>error
    )
  }
}
