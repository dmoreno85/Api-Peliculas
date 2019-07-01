import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsResultsComponent } from './films-results.component';

describe('FilmsResultsComponent', () => {
  let component: FilmsResultsComponent;
  let fixture: ComponentFixture<FilmsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
