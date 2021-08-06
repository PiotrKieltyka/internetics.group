import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internetics-group';

  constructor(
    private translateService: TranslateService,
  ) {
    translateService.setDefaultLang('pl');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }

}
