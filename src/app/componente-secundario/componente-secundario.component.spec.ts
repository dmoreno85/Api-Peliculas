import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSecundarioComponent } from './componente-secundario.component';

describe('ComponenteSecundarioComponent', () => {
  let component: ComponenteSecundarioComponent;
  let fixture: ComponentFixture<ComponenteSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
