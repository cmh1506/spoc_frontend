import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpackungFormComponent } from './verpackung-form.component';

describe('VerpackungFormComponent', () => {
  let component: VerpackungFormComponent;
  let fixture: ComponentFixture<VerpackungFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpackungFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpackungFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
