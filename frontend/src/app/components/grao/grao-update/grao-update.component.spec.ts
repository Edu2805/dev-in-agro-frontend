import { GraoService } from './../grao.service';
import { Grao } from './../grao.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraoUpdateComponent } from './grao-update.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FazendaService } from '../../fazenda/fazenda.service';
import { FuncionarioService } from '../../funcionario/funcionario.service';

describe('GraoUpdateComponent', () => {
  let component: GraoUpdateComponent;
  let fixture: ComponentFixture<GraoUpdateComponent>;
  let grao: Grao;
  let service: GraoService;
  let serviceFarm: FazendaService;
  let serviceEmployee: FuncionarioService;
  let httpMock: HttpTestingController;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoUpdateComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
        HttpClientTestingModule, BrowserAnimationsModule ],
     providers: [ MatSnackBar, HttpClient, Overlay, FuncionarioService, GraoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(GraoService);
    serviceFarm = TestBed.inject(FazendaService);
    serviceEmployee = TestBed.inject(FuncionarioService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${GraoUpdateComponent.prototype.ngOnInit.name} should called ngOnInit`, () => {
    let spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it(`#${GraoUpdateComponent.prototype.validatorInputs.name} should called validatorInputs`, () => {
    let spy = spyOn(component, 'validatorInputs');
    component.validatorInputs();
    expect(spy).toHaveBeenCalled();
  });
});
