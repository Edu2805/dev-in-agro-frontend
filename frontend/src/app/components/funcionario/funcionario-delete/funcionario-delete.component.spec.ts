import { FuncionarioService } from './../funcionario.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioDeleteComponent } from './funcionario-delete.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { Funcionario } from '../funcionario.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FuncionarioDeleteComponent', () => {
  let component: FuncionarioDeleteComponent;
  let fixture: ComponentFixture<FuncionarioDeleteComponent>;
  let funcionario: Funcionario;
  let service: FuncionarioService;
  let httpMock: HttpTestingController;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioDeleteComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
         HttpClientTestingModule, BrowserAnimationsModule ],
      providers: [ MatSnackBar, HttpClient, Overlay, FuncionarioService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(FuncionarioService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${FuncionarioDeleteComponent.prototype.ngOnInit.name} should show a employee for delete`, () => {
    funcionario = {
      id: 0,
      nome: 'João',
      fazenda: 'Fazenda Test',
      data: '2022-07-01',
      update: 'Test',
      cpf: '01145423094',
      telefone: '48966554433',
      cargo: 'Gerente',
      ativo: false
    };

    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    service.readById(funcionario.id);

    const request = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });

    request.flush(null, {
      status: 200,
      statusText: 'OK'
    });

    expect(spy).toHaveBeenCalledWith();
    expect(request.request.method).toBe('GET');(spy);
    expect(request.request.url).toBe('http://localhost:3001/funcionarios/0');
    expect(request.request.responseType).toBe('json');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`#${FuncionarioDeleteComponent.prototype.ngOnInit.name} should not show a employee for delete`, () => {
    funcionario = {
      id: 0,
      nome: 'João',
      fazenda: 'Fazenda Test',
      data: '2022-07-01',
      update: 'Test',
      cpf: '01145423094',
      telefone: '48966554433',
      cargo: 'Gerente',
      ativo: false
    };

    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    service.readById(funcionario.id);

    const request = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });

    request.flush(null, {
      status: 400,
      statusText: 'Bad Request'
    });

    expect(spy).toHaveBeenCalledWith();
    expect(request.request.method).toBe('GET');(spy);
    expect(request.request.url).toBe('http://localhost:3001/funcionarios/0');
    expect(request.request.responseType).toBe('json');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`#${FuncionarioDeleteComponent.prototype.deleteFuncionario.name} should delete a employee`, () => {
    component.deleteFuncionario();
    spyOn(component, 'deleteFuncionario').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(true);
    component.deleteFuncionario();
    expect(component.deleteFuncionario).toHaveBeenCalled();
  });

  it(`#${FuncionarioDeleteComponent.prototype.deleteFuncionario.name} should not delete a employee`, () => {
    component.deleteFuncionario();
    spyOn(component, 'deleteFuncionario').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(false);
    expect(component.deleteFuncionario).not.toHaveBeenCalled();
  });

  it(`#${FuncionarioDeleteComponent.prototype.cancel.name} should cancel called to redirect`, () => {
    const spy = spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
