import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarsoliadminComponent } from './validarsoliadmin.component';

describe('ValidarsoliadminComponent', () => {
  let component: ValidarsoliadminComponent;
  let fixture: ComponentFixture<ValidarsoliadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarsoliadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarsoliadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
