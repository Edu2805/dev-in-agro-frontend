import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed, getTestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FuncionarioService } from './funcionario.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('FuncionarioService', () => {
  let service: FuncionarioService;
  let injector: TestBed;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let mockResponse = {
    nome: 'Nome teste',
    fazenda: 'Fazenda teste',
    data: '2022-01-01',
    update: 'teste',
    cpf: '23766113003',
    telefone: '48977665544',
    cargo: 'Gerente',
    ativo: false
  };
  let mockResponseList = [
  {
    id: 0,
    nome: 'Nome teste',
    fazenda: 'Fazenda teste',
    data: '2022-01-01',
    update: 'teste',
    cpf: '23766113003',
    telefone: '48977665544',
    cargo: 'Gerente',
    ativo: false
  },
  {
    id: 1,
    nome: 'Nome teste dois',
    fazenda: 'Fazenda teste dois',
    data: '2022-01-02',
    update: 'teste dois',
    cpf: '46411366020',
    telefone: '48977665545',
    cargo: 'Encarregado',
    ativo: false
  }
]

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
        HttpClientTestingModule, BrowserAnimationsModule ]
    });
    service = TestBed.inject(FuncionarioService);
    injector = getTestBed();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${FuncionarioService.prototype.read.name} should read a employee`, () => {
    let showCompany;
    let baseUrl = 'http://localhost:3001/funcionarios';

    spyOn(httpClient, 'get').and.returnValue(of(mockResponse));

    service.read().subscribe((res) => {
      showCompany = res;
    })

    expect(showCompany).toEqual(mockResponse);
    expect(httpClient.get).toHaveBeenCalledWith(baseUrl);
    httpMock.verify();
  });

  it(`#${FuncionarioService.prototype.create.name} should create a employee`, () => {
    let funcionario =  {
      nome: 'Nome teste',
      fazenda: 'Fazenda teste',
      data: '2022-01-01',
      update: 'teste',
      cpf: '23766113003',
      telefone: '48977665544',
      cargo: 'Gerente',
      ativo: false
    }

    spyOn(httpClient, 'post').and.returnValue(of(mockResponse));

    service.create(funcionario).subscribe(res => {
      res = funcionario;
    })
    
    expect(httpClient.post).toHaveBeenCalledTimes(1);
    expect(funcionario).toEqual(mockResponse);
    httpMock.verify();
  });

  it(`#${FuncionarioService.prototype.update.name} should update a employee`, () => {
    let customer = mockResponseList[0];
    customer.nome = 'Funcionario teste update';

    spyOn(httpClient, 'put').and.returnValue(of(customer));

    service.update(customer).subscribe(res => {
      res = customer;
    })
    
    expect(httpClient.put).toHaveBeenCalledTimes(1);
    expect(customer.nome).toEqual('Funcionario teste update');
    httpMock.verify();
  });

  it(`#${FuncionarioService.prototype.delete.name} should delete a employee`, (done: DoneFn) => {
   
    spyOn(httpClient, 'delete').and.returnValue(of(mockResponse));

    service.delete(1).subscribe(res => {
        expect(res).toEqual(mockResponse);
        done();
      },
    );
    
    expect(httpClient.delete).toHaveBeenCalledTimes(1);
  });
});