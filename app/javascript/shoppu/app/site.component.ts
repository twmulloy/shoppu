import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/forkJoin'

import { AlchemyService } from './alchemy.service'
import { PageService } from './page.service'
import { Page } from './page'

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
      <page [site]="sitePages.site" [pages]="sitePages.pages"></page>
    </ng-container>
  `
})
export class SiteComponent implements OnInit {
  private alchemy: object
  sitePages: SitePages

  constructor(
    private alchemyService: AlchemyService,
    private pageService: PageService
  ) {}

  ngOnInit(): void {
    this.alchemy = this.alchemyService.getAlchemy()
    if (!!this.alchemy) {
      this.getSite()
    } else {
      this.getSiteAndPages()
    }
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
}
