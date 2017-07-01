import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { PageService } from './page.service'
import { Page } from './page'

@Component({
  selector: 'page',
  template: `
    <header>
      <ng-container *ngFor="let root of site">
        <ng-container *ngIf="root.root && root.public && root.visible">
          <h1><a routerLink="/{{root.urlname === 'index' ? '' : root.urlname}}">{{root.name}}</a></h1>
          <nav>
            <ng-template #nav let-sitePages>
              <ol>
                <ng-container *ngFor="let sitePage of sitePages">
                  <ng-container *ngIf="sitePage.public && sitePage.visible">
                    <li>
                      <a routerLink="/{{sitePage.urlname}}">{{(sitePage | extendedData:pages).title || sitePage.name}}</a>
                      <ng-container *ngTemplateOutlet="nav; context:{ $implicit: sitePage.children }"></ng-container>
                    </li>
                  </ng-container>
                </ng-container>
              </ol>
            </ng-template>
            <ng-container *ngTemplateOutlet="nav; context:{ $implicit: root.children }"></ng-container>
          </nav>
        </ng-container>
      </ng-container>
    </header>
    <main>
      <header>
        <h1>{{page?.title}}</h1>
      </header>
      <section element *ngFor="let element of page?.elements" [element]="element"></section>
    </main>
    <footer></footer>
  `,
  providers: [PageService]
})
export class PageComponent implements OnChanges {
  @Input() site: Page[]
  @Input() pages: Page[]
  page: Page

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.site && changes.site.currentValue) {
      this.route.url.subscribe(segments => {
        this.getPage(segments)
      })
    }
  }

  getPage(segments: any[]): void {
    const isRoot: boolean = segments.length === 0
    let root: Page

    if (isRoot) {
      root = this.site.find(page => page.root)
    }

    this.pageService.getPage(segments, root)
      .subscribe(page => this.page = page)
  }
}
