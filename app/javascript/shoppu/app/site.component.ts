import { Component, OnInit } from '@angular/core'

import { SiteService } from './site.service'
import { Site } from './site'

@Component({
  selector: 'site',
  template: `
    <h1><a routerLink="/">Shoppu</a></h1>
    <nav>
      <a routerLink="/products">Products</a>
      <a [routerLink]="['/products', 'sega-genesis']">Sega Genesis</a>
    </nav>
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
