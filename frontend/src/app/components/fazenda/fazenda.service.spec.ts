import { HttpClientModule, HttpHandler, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FazendaService } from './fazenda.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('FazendaService', () => {
  let service: FazendaService;
  let injector: TestBed;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let mockResponse = {
    name: 'Fazenda teste',
    endereco: 'Rua teste',
    estoque: 0,
    ultimaColheita: '2022-01-01',
    grao: 'Soja',
    cidade: 'Cidade teste'
  };
  let mockResponseList = [
  {
    id: 0,
    name: 'Fazenda teste',
    endereco: 'Rua teste',
    estoque: 0,
    ultimaColheita: '2022-01-01',
    grao: 'Soja',
    cidade: 'Cidade teste'
  },
  {
    id: 1,
    name: 'Fazenda teste dois',
    endereco: 'Rua teste dois',
    estoque: 1,
    ultimaColheita: '2022-01-02',
    grao: 'Café',
    cidade: 'Cidade teste dois'
  }
];

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
        HttpClientTestingModule, BrowserAnimationsModule ]
    })
    service = TestBed.inject(FazendaService);
    injector = getTestBed();
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${FazendaService.prototype.read.name} should read a farm`, () => {
    let showCompany;
    let baseUrl = 'http://localhost:3001/fazendas';

    spyOn(httpClient, 'get').and.returnValue(of(mockResponse));

    service.read().subscribe((res) => {
      showCompany = res;
    })

    expect(showCompany).toEqual(mockResponse);
    expect(httpClient.get).toHaveBeenCalledWith(baseUrl);
    httpMock.verify();
  });

  it(`#${FazendaService.prototype.create.name} should create a farm`, () => {
    let fazenda =  {
      name: 'Fazenda teste',
      endereco: 'Rua teste',
      estoque: 0,
      ultimaColheita: '2022-01-01',
      grao: 'Soja',
      cidade: 'Cidade teste'
    }

    spyOn(httpClient, 'post').and.returnValue(of(mockResponse));

    service.create(fazenda).subscribe(res => {
      res = fazenda;
    })
    
    expect(httpClient.post).toHaveBeenCalledTimes(1);
    expect(fazenda).toEqual(mockResponse);
    httpMock.verify();
  });

  it(`#${FazendaService.prototype.update.name} should update a farm`, () => {
    let customer = mockResponseList[0];
    customer.name = 'Fazenda teste update';

    spyOn(httpClient, 'put').and.returnValue(of(customer));

    service.update(customer).subscribe(res => {
      res = customer;
    })
    
    expect(httpClient.put).toHaveBeenCalledTimes(1);
    expect(customer.name).toEqual('Fazenda teste update');
    httpMock.verify();
  });

  it(`#${FazendaService.prototype.delete.name} should delete a farm`, (done: DoneFn) => {
   
    spyOn(httpClient, 'delete').and.returnValue(of(mockResponse));

    service.delete(1).subscribe(res => {
        expect(res).toEqual(mockResponse);
        done();
      },
    );
    
    expect(httpClient.delete).toHaveBeenCalledTimes(1);
  });
});