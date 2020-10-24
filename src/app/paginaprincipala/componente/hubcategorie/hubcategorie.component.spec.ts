import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubcategorieComponent } from './hubcategorie.component';

describe('HubcategorieComponent', () => {
  let component: HubcategorieComponent;
  let fixture: ComponentFixture<HubcategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubcategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
