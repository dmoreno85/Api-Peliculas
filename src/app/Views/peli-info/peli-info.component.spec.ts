import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliInfoComponent } from './peli-info.component';

describe('PeliInfoComponent', () => {
  let component: PeliInfoComponent;
  let fixture: ComponentFixture<PeliInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
