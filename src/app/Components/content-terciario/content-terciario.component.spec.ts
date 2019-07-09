import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTerciarioComponent } from './content-terciario.component';

describe('ContentTerciarioComponent', () => {
  let component: ContentTerciarioComponent;
  let fixture: ComponentFixture<ContentTerciarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTerciarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTerciarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
