import { Component, OnInit } from '@angular/core'

import { PageService } from './page.service'
import { Page } from './page'

@Component({
  selector: 'page',
  template: `
    <h2>{{page?.name}}</h2>
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
    <div *ngFor="let element of page?.elements">
      <div *ngFor="let ingredient of element.ingredients">
        <div [ngSwitch]="ingredient.name">
          <div *ngSwitchCase="'text'">
            <div [innerHTML]="ingredient.value"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  providers: [ PageService ]
})
export class PageComponent implements OnInit {
  errorMessage: string
  page: Page

  constructor(private pageService: PageService) {}

  ngOnInit() { this.getPage() }

  getPage() {
    this.pageService.getPage('index').subscribe(
      page => this.page = page,
      error => this.errorMessage = <any>error
    )
  }
}
