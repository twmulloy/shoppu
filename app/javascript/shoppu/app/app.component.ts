import { Component } from '@angular/core'

@Component({
  selector: 'shoppu',
  template: `
    <h1><a routerLink="/">Shoppu</a></h1>
    <nav>
      <a routerLink="/products">Products</a>
      <a [routerLink]="['/products', 'sega-genesis']">Sega Genesis</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
