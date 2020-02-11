import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../services/language.service';
import {ResponsiveService} from '../../services/responsive.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  isMediumWeb = true;
  isLargeWeb = true;
  isSideBarOpened = true;
  sideNavMode = 'side';

  constructor(private languageService: LanguageService, private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    // Medium Observation
    this.responsiveService.isWebMedium
      .subscribe(matched => {
        if (matched) {
          this.changeSideNavMode('side');
          this.isMediumWeb = true;
        } else {
          this.changeSideNavMode('over');
          this.isMediumWeb = false;
        }
      });
    // Large Observation
    this.responsiveService.isWebLarge
      .subscribe(matched => {
        this.isLargeWeb = matched;
      });
  }

  fa() {
    this.languageService.fa();
  }

  en() {
    this.languageService.en();
  }

  sideBarClicked(to: string) {
    if (!this.isMediumWeb) {
      this.closeSideBar();
    }
  }

  changeSideNavMode(mode: string) {
    this.sideNavMode = mode;
    if (mode === 'side') {
      this.openSideBar();
    }
    if (mode === 'over') {
      this.closeSideBar();
    }
  }

  closeSideBar() {
    this.isSideBarOpened = false;
  }

  openSideBar() {
    this.isSideBarOpened = true;
  }
}
