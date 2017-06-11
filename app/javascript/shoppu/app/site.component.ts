import { Component, OnInit } from '@angular/core'

import { SiteService } from './site.service'
import { Site } from './site'

@Component({
  selector: 'site',
  template: `
    <page [site]="site"></page>
  `
})
export class SiteComponent implements OnInit {
  site: Site

  constructor(private siteService: SiteService) {}

  ngOnInit() {
    this.getSite()
  }

  getSite() {
    this.siteService.getSite().subscribe(site => this.site = site)
  }
}
