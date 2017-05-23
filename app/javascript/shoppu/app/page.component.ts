import { Component, OnInit } from '@angular/core';

import { PageService } from './page.service';
import { Page } from './page';

@Component({
  selector: 'page',
  template: `
    <h1>Page</h1>
    <p class="error" *ngIf="errorMessage">{{errorMessage}}</p>
  `,
  providers: [ PageService ]
})
export class PageComponent implements OnInit {
  errorMessage: string;
  pages: Page[];

  constructor(private pageService: PageService) {}

  ngOnInit() { this.getPages(); }

  getPages() {
    this.pageService.getPages().subscribe(
      pages => this.pages = pages,
      error => this.errorMessage = <any>error
    );
  }
}
