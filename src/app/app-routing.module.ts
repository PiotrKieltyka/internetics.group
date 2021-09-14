import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {TeamComponent} from './team/team.component';
import {ContactComponent} from './contact/contact.component';
import {TermsComponent} from './terms/terms.component';
import {HomeComponent} from './home/home.component';
import {PricingComponent} from './home/pricing/pricing.component';
import {NotFoundComponent} from "./error/not-found.component";

const siteRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'team', component: TeamComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact/:id', component: ContactComponent},
  {path: 'terms', component: TermsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(siteRoutes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
