import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalsComponent } from './technicals.component';

describe('TechnicalsComponent', () => {
  let component: TechnicalsComponent;
  let fixture: ComponentFixture<TechnicalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
