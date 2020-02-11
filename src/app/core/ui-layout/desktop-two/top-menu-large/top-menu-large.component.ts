import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResponsiveService} from '../../../services/responsive.service';

@Component({
  selector: 'app-top-menu-large',
  templateUrl: './top-menu-large.component.html',
  styleUrls: ['./top-menu-large.component.css']
})
export class TopMenuLargeComponent implements OnInit {

  @Output() clicked = new EventEmitter<boolean>();

  isMediumWeb = true;
  isLargeWeb = true;
  isSideBarMinimized = false;

  constructor(private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    // Medium Observation
    this.responsiveService.isWebMedium
      .subscribe(matched => {
        this.isMediumWeb = matched;
      });
    // Large Observation
    this.responsiveService.isWebLarge
      .subscribe(matched => {
        this.isLargeWeb = matched;
      });
  }

  toggleSideBar() {
    this.isSideBarMinimized = ! this.isSideBarMinimized;
    this.clicked.emit(this.isSideBarMinimized);
  }
}
