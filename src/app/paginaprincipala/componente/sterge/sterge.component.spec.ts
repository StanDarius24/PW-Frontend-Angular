import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StergeComponent } from './sterge.component';

describe('StergeComponent', () => {
  let component: StergeComponent;
  let fixture: ComponentFixture<StergeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StergeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
