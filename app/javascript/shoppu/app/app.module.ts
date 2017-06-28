import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

// Components
import { AppComponent } from './app.component'
import { SiteComponent } from './site.component'
import { PageComponent } from './page.component'
import { ElementComponent } from './element.component'
import { IngredientComponent } from './ingredient.component'
import { ProductComponent } from './product.component'

// Services
import { EnvService } from './env.service'
import { SiteService } from './site.service'

const appRoutes: Routes = [
  { path: '**', component: SiteComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    PageComponent,
    ElementComponent,
    IngredientComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: Window, useValue: window },
    EnvService,
    SiteService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
