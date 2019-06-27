import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSecundarioComponent } from './content-secundario.component';

describe('ContentSecundarioComponent', () => {
  let component: ContentSecundarioComponent;
  let fixture: ComponentFixture<ContentSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
