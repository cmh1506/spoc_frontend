import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialverwendungFormComponent } from './materialverwendung-form.component';

describe('MaterialverwendungFormComponent', () => {
  let component: MaterialverwendungFormComponent;
  let fixture: ComponentFixture<MaterialverwendungFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialverwendungFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialverwendungFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
