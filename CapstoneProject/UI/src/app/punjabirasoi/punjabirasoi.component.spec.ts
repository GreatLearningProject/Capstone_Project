import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabirasoiComponent } from './punjabirasoi.component';

describe('PunjabirasoiComponent', () => {
  let component: PunjabirasoiComponent;
  let fixture: ComponentFixture<PunjabirasoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunjabirasoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabirasoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
