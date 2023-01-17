import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcxExtensionHubComponent } from './rcx-extension-hub.component';

describe('RcxExtensionHubComponent', () => {
  let component: RcxExtensionHubComponent;
  let fixture: ComponentFixture<RcxExtensionHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcxExtensionHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcxExtensionHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
