import { Fazenda } from './../fazenda.model';
import { FazendaService } from './../fazenda.service';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { FazendaDeleteComponent } from './fazenda-delete.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FazendaDeleteComponent', () => {
  let component: FazendaDeleteComponent;
  let fixture: ComponentFixture<FazendaDeleteComponent>;
  let fazenda: Fazenda;
  let service: FazendaService;
  let httpMock: HttpTestingController;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaDeleteComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
        HttpClientTestingModule, BrowserAnimationsModule ],
     providers: [ MatSnackBar, HttpClient, Overlay, FazendaService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(FazendaService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${FazendaDeleteComponent.prototype.ngOnInit.name} should show a employee for delete`, () => {
    fazenda = {
      id: 0,
      name: 'Fazenda test',
      endereco: 'Rua test',
      estoque: 100,
      ultimaColheita: '2022-01-01',
      grao: 'Soja',
      cidade: 'Cidade test'
    };

    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    service.readById(fazenda.id);

    const request = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });

    request.flush(null, {
      status: 200,
      statusText: 'OK'
    });

    expect(spy).toHaveBeenCalledWith();
    expect(request.request.method).toBe('GET');(spy);
    expect(request.request.url).toBe('http://localhost:3001/fazendas/0');
    expect(request.request.responseType).toBe('json');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`#${FazendaDeleteComponent.prototype.ngOnInit.name} should not show a farm for delete`, () => {
    fazenda = {
      id: 0,
      name: 'Fazenda test',
      endereco: 'Rua test',
      estoque: 100,
      ultimaColheita: '2022-01-01',
      grao: 'Soja',
      cidade: 'Cidade test'
    };

    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    service.readById(fazenda.id);

    const request = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });

    request.flush(null, {
      status: 400,
      statusText: 'Bad Request'
    });

    expect(spy).toHaveBeenCalledWith();
    expect(request.request.method).toBe('GET');(spy);
    expect(request.request.url).toBe('http://localhost:3001/fazendas/0');
    expect(request.request.responseType).toBe('json');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`#${FazendaDeleteComponent.prototype.deleteFazenda.name} should delete a farm`, () => {
    component.deleteFazenda();
    spyOn(component, 'deleteFazenda').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(true);
    component.deleteFazenda();
    expect(component.deleteFazenda).toHaveBeenCalled();
  });

  it(`#${FazendaDeleteComponent.prototype.deleteFazenda.name} should not delete a farm`, () => {
    component.deleteFazenda();
    spyOn(component, 'deleteFazenda').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(false);
    expect(component.deleteFazenda).not.toHaveBeenCalled();
  });

  it(`#${FazendaDeleteComponent.prototype.cancel.name} should cancel called to redirect`, () => {
    const spy = spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});