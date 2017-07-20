import { Component, Input } from '@angular/core'

import { Page } from './page'
import { Order } from './order'

@Component({
  selector: '[nav]',
  template: `
    <ng-container *ngFor="let root of site">
      <ng-container *ngIf="root.root && root.public && root.visible">
        <h1>
          <a routerLink="/{{root.urlname === 'index' ? '' : root.urlname}}">
            {{(root | extendedData:pages).title || root.name}}
          </a>
        </h1>
        <nav>
          <ol>
            <li>
              <a href="javascript:void(0)" (click)="toggleNav()">
                <i class="icon-menu"></i>
              </a>
              <nav *ngIf="showNav">
                <header>
                  <a href="javascript:void(0)" (click)="toggleNav()">
                    <i class="icon-cancel"></i>
                  </a>
                </header>
                <ng-template #nav let-sitePages>
                  <section>
                    <ol>
                      <ng-container *ngFor="let sitePage of sitePages">
                        <ng-container *ngIf="sitePage.public && sitePage.visible">
                          <li>
                            <a routerLink="/{{sitePage.urlname}}">
                              {{(sitePage | extendedData:pages).title || sitePage.name}}
                            </a>
                            <ng-container *ngTemplateOutlet="nav; context:{ $implicit: sitePage.children }"></ng-container>
                          </li>
                        </ng-container>
                      </ng-container>
                    </ol>
                  </section>
                </ng-template>
                <ng-container *ngTemplateOutlet="nav; context:{ $implicit: root.children }"></ng-container>
              </nav>
            </li>
            <li>
              <a href="javascript:void(0)" (click)="toggleCart()">
                <i class="icon-basket"></i>
              </a>
              <nav *ngIf="showCart">
                <header>
                  <a href="javascript:void(0)" (click)="toggleCart()">
                    <i class="icon-cancel"></i>
                  </a>
                </header>
                <section cart [order]="currentOrder"></section>
              </nav>
            </li>
          </ol>
        </nav>
      </ng-container>
    </ng-container>
  `
})
export class NavComponent {
  @Input() site: Page[]
  @Input() pages: Page[]
  @Input() page: Page
  @Input() currentOrder: Order

  showCart: boolean = false
  showNav: boolean = false

  toggleCart(): void {
    this.showCart = !this.showCart
  }

  toggleNav(): void {
    this.showNav = !this.showNav
  }
}
