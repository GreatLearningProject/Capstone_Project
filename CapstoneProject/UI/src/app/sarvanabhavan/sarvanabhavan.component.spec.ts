import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarvanabhavanComponent } from './sarvanabhavan.component';

describe('SarvanabhavanComponent', () => {
  let component: SarvanabhavanComponent;
  let fixture: ComponentFixture<SarvanabhavanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarvanabhavanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarvanabhavanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
