import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HommesComponent } from './hommes.component';

describe('HommesComponent', () => {
  let component: HommesComponent;
  let fixture: ComponentFixture<HommesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HommesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
