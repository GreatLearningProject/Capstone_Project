import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdipihotelComponent } from './udipihotel.component';

describe('UdipihotelComponent', () => {
  let component: UdipihotelComponent;
  let fixture: ComponentFixture<UdipihotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdipihotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdipihotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
