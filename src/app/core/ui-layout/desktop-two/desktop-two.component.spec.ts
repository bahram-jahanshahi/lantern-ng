import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopTwoComponent } from './desktop-two.component';

describe('DesktopTwoComponent', () => {
  let component: DesktopTwoComponent;
  let fixture: ComponentFixture<DesktopTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
