import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

// Components
import { AppComponent } from './app.component'
import { SiteComponent } from './site.component'
import { PageComponent } from './page.component'

// Services
import { SiteService } from './site.service'

const appRoutes: Routes = [
  { path: '**', component: SiteComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SiteService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
