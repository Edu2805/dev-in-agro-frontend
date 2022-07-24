import { HttpClient, HttpClientModule } from '@angular/common/http';
import { getTestBed, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { GraoService } from './grao.service';

describe('GraoService', () => {
  let service: GraoService;
  let injector: TestBed;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let mockResponse = {
    nome: 'Soja teste',
    previsao_colheita: '2022-08-01',
    informacoes: 'Teste',
    ativo: false
  };
  let mockResponseList = [
  {
    id: 0,
    nome: 'Soja teste',
    previsao_colheita: '2022-08-01',
    informacoes: 'Teste',
    ativo: false
  },
  {
    id: 1,
    nome: 'Soja teste dois',
    previsao_colheita: '2022-08-02',
    informacoes: 'Teste dois',
    ativo: false
  }
]

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
        HttpClientTestingModule, BrowserAnimationsModule ]
    })
    service = TestBed.inject(GraoService);
    injector = getTestBed();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${GraoService.prototype.read.name} should read a graint`, () => {
    let showGraint;
    let baseUrl = 'http://localhost:3001/graos';

    spyOn(httpClient, 'get').and.returnValue(of(mockResponse));

    service.read().subscribe((res) => {
      showGraint = res;
    })

    expect(showGraint).toEqual(mockResponse);
    expect(httpClient.get).toHaveBeenCalledWith(baseUrl);
    httpMock.verify();
  });

  it(`#${GraoService.prototype.create.name} should create a graint`, () => {
    let grao =  {
      nome: 'Soja teste',
      previsao_colheita: '2022-08-01',
      informacoes: 'Teste',
      ativo: false
    }

    spyOn(httpClient, 'post').and.returnValue(of(mockResponse));

    service.create(grao).subscribe(res => {
      res = grao;
    })
    
    expect(httpClient.post).toHaveBeenCalledTimes(1);
    expect(grao).toEqual(mockResponse);
    httpMock.verify();
  });

  it(`#${GraoService.prototype.update.name} should update a graint`, () => {
    let customer = mockResponseList[0];
    customer.nome = 'Grao teste update';

    spyOn(httpClient, 'put').and.returnValue(of(customer));

    service.update(customer).subscribe(res => {
      res = customer;
    })
    
    expect(httpClient.put).toHaveBeenCalledTimes(1);
    expect(customer.nome).toEqual('Grao teste update');
    httpMock.verify();
  });

  it(`#${GraoService.prototype.delete.name} should delete a graint`, (done: DoneFn) => {
   
    spyOn(httpClient, 'delete').and.returnValue(of(mockResponse));

    service.delete(1).subscribe(res => {
        expect(res).toEqual(mockResponse);
        done();
      },
    );
    
    expect(httpClient.delete).toHaveBeenCalledTimes(1);
  });
});