import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCommitsComponent } from './route-commits.component';

describe('RouteCommitsComponent', () => {
  let component: RouteCommitsComponent;
  let fixture: ComponentFixture<RouteCommitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouteCommitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
