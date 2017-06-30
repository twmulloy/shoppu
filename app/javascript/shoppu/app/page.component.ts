import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Site } from './site'

import { PageService } from './page.service'
import { Page } from './page'

@Component({
  selector: '[page]',
  template: `
    <header>
      <ng-container *ngFor="let root of site?.pages">
        <ng-container *ngIf="root.root && root.public && root.visible">
          <h1><a routerLink="/{{root.urlname === 'index' ? '' : root.urlname}}">{{root.name}}</a></h1>
          <nav>
            <ng-template #nav let-pages>
              <ol>
                <ng-container *ngFor="let page of pages">
                  <ng-container *ngIf="page.public && page.visible">
                    <li>
                      <a routerLink="/{{page.urlname}}">{{page.name}}</a>
                      <ng-container *ngTemplateOutlet="nav; context:{ $implicit: page.children }"></ng-container>
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
      <section element *ngFor="let element of page?.elements" [element]="element"></section>
    </main>

    <footer></footer>
  `,
  providers: [PageService]
})
export class PageComponent implements OnChanges {
  @Input() site: Site
  page: Page

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.site.currentValue) {
      this.route.url.subscribe(segments => {
        this.getPage(segments)
      })
    }
  }

  getPage(segments: Array<any>): void {
    const isRoot: boolean = segments.length === 0
    let root: Page

    if (isRoot) {
      root = this.site.pages.find(page => page.root)
    }

    this.pageService.getPage(segments, root)
      .subscribe(page => this.page = page)
  }
}
