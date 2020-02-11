import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  isRtl = new BehaviorSubject<boolean>(false);

  constructor(private translate: TranslateService) {
  }

  fa() {
    this.translate.setDefaultLang('fa');
    this.isRtl.next(true);
  }

  en() {
    this.translate.setDefaultLang('en');
    this.isRtl.next(false);
  }
}
