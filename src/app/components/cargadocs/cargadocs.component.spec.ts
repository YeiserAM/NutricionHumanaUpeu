import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargadocsComponent } from './cargadocs.component';

describe('CargadocsComponent', () => {
  let component: CargadocsComponent;
  let fixture: ComponentFixture<CargadocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargadocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargadocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
