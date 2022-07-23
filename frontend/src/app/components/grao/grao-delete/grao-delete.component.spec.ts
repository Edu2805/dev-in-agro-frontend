import { GraoService } from './../grao.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraoDeleteComponent } from './grao-delete.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Grao } from '../grao.model';

describe('GraoDeleteComponent', () => {
  let component: GraoDeleteComponent;
  let fixture: ComponentFixture<GraoDeleteComponent>;
  let service: GraoService;
  let httpMock: HttpTestingController;
  let router: Router;
  let location: Location;
  let grao: Grao;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoDeleteComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
        HttpClientTestingModule, BrowserAnimationsModule ],
     providers: [ MatSnackBar, HttpClient, Overlay, GraoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(GraoService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${GraoDeleteComponent.prototype.ngOnInit.name} should show a graint for delete`, () => {
    grao = {
      id: 0,
      nome: 'Soja',
      previsao_colheita: '2022-09-01',
      informacoes: 'Test',
      ativo: false
    };

    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    service.readById(grao.id);

    const request = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });

    request.flush(null, {
      status: 200,
      statusText: 'OK'
    });

    expect(spy).toHaveBeenCalledWith();
    expect(request.request.method).toBe('GET');(spy);
    expect(request.request.url).toBe('http://localhost:3001/graos/0');
    expect(request.request.responseType).toBe('json');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`#${GraoDeleteComponent.prototype.ngOnInit.name} should not show a grait for delete`, () => {
    grao = {
      id: 0,
      nome: 'Soja',
      previsao_colheita: '2022-09-01',
      informacoes: 'Test',
      ativo: false
    };

    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    service.readById(grao.id);

    const request = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });

    request.flush(null, {
      status: 400,
      statusText: 'Bad Request'
    });

    expect(spy).toHaveBeenCalledWith();
    expect(request.request.method).toBe('GET');(spy);
    expect(request.request.url).toBe('http://localhost:3001/graos/0');
    expect(request.request.responseType).toBe('json');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`#${GraoDeleteComponent.prototype.deletarGrao.name} should delete a graint`, () => {
    component.deletarGrao();
    spyOn(component, 'deletarGrao').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(true);
    component.deletarGrao();
    expect(component.deletarGrao).toHaveBeenCalled();
  });

  it(`#${GraoDeleteComponent.prototype.deletarGrao.name} should not delete a graint`, () => {
    component.deletarGrao();
    spyOn(component, 'deletarGrao').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(false);
    expect(component.deletarGrao).not.toHaveBeenCalled();
  });

  it(`#${GraoDeleteComponent.prototype.cancel.name} should cancel called to redirect`, () => {
    const spy = spyOn(component, 'cancel').and.callThrough();
    component.cancel();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
