import { Component, OnInit } from '@angular/core'

import { PageService } from './page.service'
import { Page } from './page'

@Component({
  selector: 'site',
  template: `
    <page [site]="site" [pages]="pages"></page>
  `
})
export class SiteComponent implements OnInit {
  site: Page[]
  pages: Page[]

  constructor(
    private siteService: PageService
  ) {}

  ngOnInit(): void {
    this.getSite()
    this.getPages()
  }

  getSite(): void {
    this.siteService.getSite()
      .subscribe(site => this.site = site)
  }

  getPages(): void {
    this.siteService.getPages()
      .subscribe(pages => this.pages = pages)
  }
}
