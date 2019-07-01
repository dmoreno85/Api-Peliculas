import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesResultsComponent } from './series-results.component';

describe('SeriesResultsComponent', () => {
  let component: SeriesResultsComponent;
  let fixture: ComponentFixture<SeriesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
