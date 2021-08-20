import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Internetics.Group';
  visibleNavbar = false;

  constructor(
    private translateService: TranslateService,
  ) {
    translateService.setDefaultLang('pl');
  }

  switchLanguage(language: string): void {
    this.translateService.use(language);
  }

  switchNavbar(): void {
    this.visibleNavbar = !this.visibleNavbar;
  }

}
