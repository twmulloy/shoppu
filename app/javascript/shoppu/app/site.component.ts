import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/forkJoin'

import { AlchemyService } from './alchemy.service'
import { PageService } from './page.service'
import { Page } from './page'
import { OrderService } from './order.service'
import { Order } from './order'

interface SitePages {
  site: Page[],
  pages: Page[]
}

@Component({
  selector: 'site',
  template: `
    <ng-template #loading>
      Loading...
    </ng-template>
    <ng-container *ngIf="sitePages; else loading">
      <page
        [site]="sitePages.site"
        [pages]="sitePages.pages"
        [currentOrder]="currentOrder"
      ></page>
    </ng-container>
  `
})
export class SiteComponent implements OnInit {
  private alchemy: object
  sitePages: SitePages
  currentOrder: Order

  constructor(
    private alchemyService: AlchemyService,
    private pageService: PageService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.alchemy = this.alchemyService.getAlchemy()
    if (!!this.alchemy) {
      this.getSite()
    } else {
      this.getSiteAndPages()
    }

    this.getCurrentOrder()
  }

  getSiteAndPages(): void {
    Observable.forkJoin([
      this.pageService.getSite(),
      this.pageService.getPages()
    ]).subscribe(sitePages => this.sitePages = {
      site: sitePages[0],
      pages: sitePages[1]
    })
  }

  getSite(): void {
    this.pageService.getSite()
      .subscribe(site => {
        return this.sitePages = { ...this.sitePages, site }
      })
  }

  getCurrentOrder(): void {
    this.orderService.getCurrentOrder()
      .subscribe(order => {
        this.currentOrder = order
        if (!this.currentOrder) {
          this.newOrder()
        }
      })
  }

  newOrder(): void {
    this.orderService.new()
      .subscribe(order => this.currentOrder = order)
  }
}
