import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EatnrepeatComponent } from './eatnrepeat.component';

describe('EatnrepeatComponent', () => {
  let component: EatnrepeatComponent;
  let fixture: ComponentFixture<EatnrepeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EatnrepeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EatnrepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
