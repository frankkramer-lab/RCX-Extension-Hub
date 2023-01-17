import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcxPackageComponent } from './rcx-package.component';

describe('RcxPackageComponent', () => {
  let component: RcxPackageComponent;
  let fixture: ComponentFixture<RcxPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcxPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcxPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
