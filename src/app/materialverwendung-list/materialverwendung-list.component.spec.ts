import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialverwendungListComponent } from './materialverwendung-list.component';

describe('MaterialverwendungListComponent', () => {
  let component: MaterialverwendungListComponent;
  let fixture: ComponentFixture<MaterialverwendungListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialverwendungListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialverwendungListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
