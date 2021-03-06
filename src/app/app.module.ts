import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { TermsComponent } from './terms/terms.component';
import { HomeComponent } from './home/home.component';
import { JumboComponent } from './home/jumbo/jumbo.component';
import { ExamplesComponent } from './home/examples/examples.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PricingComponent } from './home/pricing/pricing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BenefitsComponent } from './home/benefits/benefits.component';
import { NotFoundPageComponent } from './404-page/404-page.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ArrowToTopComponent } from './tools/arrow-to-top/arrow-to-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent } from './home/examples/example.component';
import { API_EMAIL_TOKEN } from './tools/api-email-token';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    TeamComponent,
    ContactComponent,
    TermsComponent,
    HomeComponent,
    JumboComponent,
    ExamplesComponent,
    PricingComponent,
    BenefitsComponent,
    NotFoundPageComponent,
    FooterComponent,
    ArrowToTopComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: API_EMAIL_TOKEN,
      useValue: 'https://node.piotrkieltyka.website/mail',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
