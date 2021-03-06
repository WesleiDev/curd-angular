import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirComponent } from './incluir.component';

describe('IncluirComponent', () => {
  let component: IncluirComponent;
  let fixture: ComponentFixture<IncluirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
