import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

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
  page: Page

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.url.subscribe(segments => {
      this.getPage(segments)
    })
  }

  getPage(path) {
    this.pageService.getPage(path).subscribe(
      page => this.page = page
    )
  }
}
