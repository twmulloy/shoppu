import { Component, OnInit } from '@angular/core'

import { EnvService } from './env.service'
import { Env } from './env'

import { PageService } from './page.service'
import { Page } from './page'

@Component({
  selector: 'site',
  template: `
    <page [site]="site" [pages]="pages"></page>
  `
})
export class SiteComponent implements OnInit {
  env: Env
  site: Page[]
  pages: Page[]

  constructor(
    private envService: EnvService,
    private siteService: PageService
  ) {}

  ngOnInit(): void {
    this.getEnv()
    this.getSite()
    this.getPages()
  }

  getEnv(): Env {
    return this.env = this.envService.getEnv()
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
