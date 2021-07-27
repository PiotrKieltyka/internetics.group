import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { HomeComponent } from './home/home.component';
import { JumboComponent } from './home/jumbo/jumbo.component';
import { ExamplesComponent } from './home/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    TeamComponent,
    ContactComponent,
    TermsComponent,
    HomeComponent,
    JumboComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
