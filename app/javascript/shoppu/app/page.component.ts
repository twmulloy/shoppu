import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Site } from './site'

import { PageService } from './page.service'
import { Page } from './page'

@Component({
  selector: 'page',
  template: `
    <div *ngFor="let element of page?.elements">
      <element [element]="element"></element>
    </div>
  `,
  providers: [ PageService ]
})
export class PageComponent implements OnChanges {
  @Input() site: Site
  page: Page

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.site.currentValue) {
      this.route.url.subscribe(segments => {
        this.getPage(segments)
      })
    }
  }

  getPage(segments: Array<any>) {
    const isRoot: boolean = segments.length === 0
    let root: Page

    if (isRoot) {
      root = this.site.pages.find(page => page.root)
    }

    this.pageService.getPage(segments, root).subscribe(page => this.page = page)
  }
}
