import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { PageService } from './page.service'
import { Page } from './page'
import { ProductService } from './product.service'
import { Product } from './product'
import { Order } from './order'

@Component({
  selector: 'page',
  template: `
    <ng-container *ngIf="product">
      <header nav
        [site]="site"
        [pages]="pages"
      ></header>
      <main>
        <section product [product]="product"></section>
      </main>
    </ng-container>
    <ng-container *ngIf="page" [ngSwitch]="page.page_layout">
      <ng-container *ngSwitchDefault>
        <header nav
          [site]="site"
          [pages]="pages"
          [page]="page"
        ></header>
        <main>
          <header>
            <h1>{{page.title}}</h1>
          </header>
          <section
            *ngFor="let element of page.elements"
            element
            [item]="element"
            [pages]="pages"
          ></section>
        </main>
      </ng-container>
    </ng-container>
  `,
  providers: [
    PageService,
    ProductService
  ]
})
export class PageComponent implements OnChanges {
  @Input() site: Page[]
  @Input() pages: Page[]
  @Input() currentOrder: Order
  page: Page
  product: Product

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService,
    private productService: ProductService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.site && changes.site.currentValue) {
      this.route.url.subscribe(segments => this.getPage(segments))
    }
  }

  getPage(segments: any[]): void {
    const isRoot: boolean = segments.length === 0
    let root: Page

    if (isRoot) {
      root = this.site.find(page => page.root)
    }

    this.pageService.getPage(segments, root)
      .subscribe(
        page => {
          delete this.product
          return this.page = page
        },
        err => {
          if (err.status === 404) { this.getProduct(segments) }
        }
      )
  }

  getProduct(segments: any[]): void {
    this.productService.getProduct(segments[0].path)
      .subscribe(
        product => {
          delete this.page
          return this.product = product
        }
      )
  }
}
