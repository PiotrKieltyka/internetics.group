import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  animations: [slideInAnimation],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Internetics.Group';
  visibleNavbar = false;

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang(
      translateService.getBrowserLang() === 'pl' ? 'pl' : 'en',
    );
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
