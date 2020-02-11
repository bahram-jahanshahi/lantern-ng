import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuLargeComponent } from './top-menu-large.component';

describe('TopMenuLargeComponent', () => {
  let component: TopMenuLargeComponent;
  let fixture: ComponentFixture<TopMenuLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenuLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
