import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAdminComponent } from './report-admin.component';

describe('ReportAdminComponent', () => {
  let component: ReportAdminComponent;
  let fixture: ComponentFixture<ReportAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
