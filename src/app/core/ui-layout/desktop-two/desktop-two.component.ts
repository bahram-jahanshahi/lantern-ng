import {Component, OnInit} from '@angular/core';
import {ResponsiveService} from '../../services/responsive.service';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-desktop-two',
  templateUrl: './desktop-two.component.html',
  styleUrls: ['./desktop-two.component.css']
})
export class DesktopTwoComponent implements OnInit {

  isSideBarOpened = true;
  sideNavMode = 'side';
  isMediumWeb = true;
  isLargeWeb = true;
  isSideBarMinimized = false;
  isRtl = false;

  constructor(private responsiveService: ResponsiveService, private languageService: LanguageService) {
    languageService.isRtl.subscribe(value => {
      this.isRtl = value;
    });
  }

  ngOnInit() {
    // Medium Observation
    this.responsiveService.isWebMedium
      .subscribe(matched => {
        this.isMediumWeb = matched;
        if (matched) {
          this.changeSideNavMode('side');
        } else {
          this.changeSideNavMode('over');
        }
      });
    // Large Observation
    this.responsiveService.isWebLarge
      .subscribe(matched => {
        this.isLargeWeb = matched;
      });
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

  toggleSideBar(isMinimized: boolean) {
    this.isSideBarMinimized = isMinimized;
  }
}
