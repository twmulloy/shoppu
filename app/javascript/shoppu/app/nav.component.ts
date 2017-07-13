import { Component, Input } from '@angular/core'

import { Page } from './page'

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
          <ng-template #nav let-sitePages>
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
          </ng-template>
          <ng-container *ngTemplateOutlet="nav; context:{ $implicit: root.children }"></ng-container>
        </nav>
        <ng-container *ngIf="page">
          <cart></cart>
        </ng-container>
      </ng-container>
    </ng-container>
  `
})
export class NavComponent {
  @Input() site: Page[]
  @Input() pages: Page[]
  @Input() page: Page
}
