import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {FormControl} from '@angular/forms';
import {LanguageService} from '../../services/language.service';
import {SecurityService} from '../../services/security.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  isProduction = environment.production;
  usernameFormControl = new FormControl('');
  passwordFormControl = new FormControl('');
  loginMessage: string;
  // loading
  loading = false;

  constructor(private languageService: LanguageService, private securityService: SecurityService) {
  }

  ngOnInit() {
  }

  login() {
    this.securityService.login(this.usernameFormControl.value, this.passwordFormControl.value);
  }

  fa() {
    this.languageService.fa();
  }

  en() {
    this.languageService.en();
  }
}
