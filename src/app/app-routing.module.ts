import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { NotFoundPageComponent } from './404-page/404-page.component';

const siteRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
    data: { animation: 'AboutUsPage' },
  },
  { path: 'team', component: TeamComponent, data: { animation: 'TeamPage' } },
  { path: 'pricing', component: PricingComponent },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'ContactPage' },
  },
  {
    path: 'contact/:id',
    component: ContactComponent,
    data: { animation: 'ContactPage' },
  },
  {
    path: 'terms',
    component: TermsComponent,
    data: { animation: 'TermsPage' },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
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
