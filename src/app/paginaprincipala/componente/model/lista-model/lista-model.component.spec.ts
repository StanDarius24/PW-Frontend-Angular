import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModelComponent } from './lista-model.component';

describe('ListaModelComponent', () => {
  let component: ListaModelComponent;
  let fixture: ComponentFixture<ListaModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
