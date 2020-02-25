import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  isLogin = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  login(username, password) {
    this.isLogin.next(true);
  }

  logout() {
    this.isLogin.next(false);
  }
}
