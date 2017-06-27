import { Component, OnInit } from '@angular/core'

import { EnvService } from './env.service'
import { Env } from './env'
import { SiteService } from './site.service'
import { Site } from './site'

@Component({
  selector: 'site',
  template: `
    <div page [site]="site"></div>
  `
})
export class SiteComponent implements OnInit {
  env: Env
  site: Site

  constructor(
    private envService: EnvService,
    private siteService: SiteService
  ) {}

  ngOnInit(): void {
    this.getEnv()
    this.getSite()
  }

  getEnv(): Env {
    return this.env = this.envService.getEnv()
  }

  getSite(): void {
    this.siteService.getSite().subscribe(site => this.site = site)
  }
}
