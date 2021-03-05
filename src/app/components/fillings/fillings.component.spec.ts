import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingsComponent } from './fillings.component';

describe('FillingsComponent', () => {
  let component: FillingsComponent;
  let fixture: ComponentFixture<FillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
