import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './animations';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet, UrlSegment } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './services/seo.service';

@Component({
  animations: [slideInAnimation],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  visibleNavbar = false;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
  ) {
    translateService.setDefaultLang(
      translateService.getBrowserLang() === 'pl' ? 'pl' : 'en',
    );
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.snapshot.url),
      )
      .subscribe((data: UrlSegment) => {
        switch (data[`path`]) {
          case 'aboutUs':
            this.seoService.updateTitle(this.translateService.get('MetaAboutUs'));
            break;
          case 'team':
            this.seoService.updateTitle(this.translateService.get('MetaTeam'));
            break;
          case 'contact':
            this.seoService.updateTitle(this.translateService.get('MetaContact'));
            break;
          default:
            this.seoService.updateTitle(this.translateService.get('MetaTitle'));
        }
      });
  }

  switchLanguage(language: string): void {
    this.translateService.use(language);
  }

  switchNavbar(): void {
    this.visibleNavbar = !this.visibleNavbar;
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
