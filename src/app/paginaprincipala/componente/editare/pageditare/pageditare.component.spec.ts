import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageditareComponent } from './pageditare.component';

describe('PageditareComponent', () => {
  let component: PageditareComponent;
  let fixture: ComponentFixture<PageditareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageditareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageditareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
