import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'
// Components
import { AppComponent } from './app.component'
import { SiteComponent } from './site.component'
import { PageComponent } from './page.component'
import { NavComponent } from './nav.component'
import { ElementComponent } from './element.component'
import { IngredientComponent } from './ingredient.component'
import { TaxonomyComponent } from './taxonomy.component'
import { TaxonComponent } from './taxon.component'
import { ProductComponent } from './product.component'
import { VideoComponent } from './video.component'
import { CartComponent } from './cart/component'
// Pipes
import { ExtendedDataPipe } from './extended-data.pipe'
import { ProductPageRoutePipe } from './product-page-route.pipe'
// Services
import { AlchemyService } from './alchemy.service'
import { EnvService } from './env.service'
import { PageService } from './page.service'

const appRoutes: Routes = [
  { path: 'index', redirectTo: '' },
  { path: '**', component: SiteComponent }
]

@NgModule({
  declarations: [
    // Components
    AppComponent,
    SiteComponent,
    PageComponent,
    NavComponent,
    ElementComponent,
    IngredientComponent,
    TaxonomyComponent,
    TaxonComponent,
    ProductComponent,
    VideoComponent,
    CartComponent,
    // Pipes
    ExtendedDataPipe,
    ProductPageRoutePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: Window, useValue: window },
    AlchemyService,
    EnvService,
    PageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
