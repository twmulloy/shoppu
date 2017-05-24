import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
// import { RouterModule }   from '@angular/router'

import { AppComponent } from './app.component'
import { SiteComponent } from './site.component'
import { PageComponent } from './page.component'

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
