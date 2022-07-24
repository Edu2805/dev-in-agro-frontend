import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { EmpresaService } from './empresa.service';

describe('EmpresaService', () => {
  let service: EmpresaService;
  let injector: TestBed;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let mockResponse = {
    nome: 'Empresa teste',
    email: 'teste@teste.com',
    cnpj: '19349699000128',
    endereco: 'Rua teste',
    senha: '123456'
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
        HttpClientTestingModule, BrowserAnimationsModule ]
    })
    service = TestBed.inject(EmpresaService);
    injector = getTestBed();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${EmpresaService.prototype.read.name} should read a company`, () => {
    let showCompany;
    let baseUrl = 'http://localhost:3001/empresas/';

    spyOn(httpClient, 'get').and.returnValue(of(mockResponse));

    service.read().subscribe((res) => {
      showCompany = res;
    })

    expect(showCompany).toEqual(mockResponse);
    expect(httpClient.get).toHaveBeenCalledWith(baseUrl);
    httpMock.verify();
  });

  it(`#${EmpresaService.prototype.create.name} should create a company`, () => {
    let empresa =  {
      nome: 'Empresa teste',
      email: 'teste@teste.com',
      cnpj: '19349699000128',
      endereco: 'Rua teste',
      senha: '123456'
    }

    spyOn(httpClient, 'post').and.returnValue(of(mockResponse));

    service.create(empresa).subscribe(res => {
      res = empresa;
    })
    
    expect(httpClient.post).toHaveBeenCalledTimes(1);
    expect(empresa).toEqual(mockResponse);
    httpMock.verify();
  });
});