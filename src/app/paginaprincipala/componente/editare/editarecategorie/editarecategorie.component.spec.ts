import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarecategorieComponent } from './editarecategorie.component';

describe('EditarecategorieComponent', () => {
  let component: EditarecategorieComponent;
  let fixture: ComponentFixture<EditarecategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarecategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
