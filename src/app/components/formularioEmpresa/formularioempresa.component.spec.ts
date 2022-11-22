import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioempresaComponent } from './formularioempresa.component';

describe('FormularioempresaComponent', () => {
  let component: FormularioempresaComponent;
  let fixture: ComponentFixture<FormularioempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
