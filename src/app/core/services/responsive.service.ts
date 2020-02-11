import {Injectable} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  isWebMedium = new BehaviorSubject<boolean>(false);
  isWebLarge = new BehaviorSubject<boolean>(false);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(
      [Breakpoints.Web, Breakpoints.Medium]
    ).subscribe(result => {
      if (result.matches) {
        this.isWebMedium.next(true);
      } else {
        this.isWebMedium.next(false);
      }
    });

    breakpointObserver.observe(
      [Breakpoints.Web, Breakpoints.Large]
    ).subscribe(result => {
      if (result.matches) {
        this.isWebLarge.next(true);
      } else {
        this.isWebLarge.next(false);
      }
    });
  }
}
