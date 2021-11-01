import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpackungListComponent } from './verpackung-list.component';

describe('VerpackungListComponent', () => {
  let component: VerpackungListComponent;
  let fixture: ComponentFixture<VerpackungListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpackungListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpackungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
