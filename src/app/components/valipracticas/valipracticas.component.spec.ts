import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValipracticasComponent } from './valipracticas.component';

describe('ValipracticasComponent', () => {
  let component: ValipracticasComponent;
  let fixture: ComponentFixture<ValipracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValipracticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValipracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
