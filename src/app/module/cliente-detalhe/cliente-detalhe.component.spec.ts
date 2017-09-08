import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDetalheComponent } from './cliente-detalhe.component';

describe('ClienteDetalheComponent', () => {
  let component: ClienteDetalheComponent;
  let fixture: ComponentFixture<ClienteDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
