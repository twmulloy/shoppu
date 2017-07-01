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
import { TaxonomyComponent } from './taxonomy.component'
import { TaxonComponent } from './taxon.component'
import { ProductComponent } from './product.component'
// Pipes
import { ExtendedDataPipe } from './extended-data.pipe'
// Services
import { EnvService } from './env.service'
import { PageService } from './page.service'

const appRoutes: Routes = [
  { path: 'index', redirectTo: '' },
  { path: '**', component: SiteComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    PageComponent,
    ElementComponent,
    IngredientComponent,
    TaxonomyComponent,
    TaxonComponent,
    ProductComponent,
    ExtendedDataPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: Window, useValue: window },
    EnvService,
    PageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
