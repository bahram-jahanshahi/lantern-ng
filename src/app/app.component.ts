import {Component} from '@angular/core';
import {LanguageService} from './core/services/language.service';
import {SecurityService} from './core/services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRtl: boolean;
  isLogin = false;

  constructor(private languageService: LanguageService, private securityService: SecurityService) {
    // listen to login
    securityService.isLogin.subscribe(value => {
      this.isLogin = value;
    });
    // listen to rtl <-> ltr
    languageService.isRtl.subscribe(value => {
      this.isRtl = value;
    });
    // default language
    languageService.fa();
  }
}
