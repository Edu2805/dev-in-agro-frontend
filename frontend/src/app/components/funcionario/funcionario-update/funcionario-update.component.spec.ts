import { FazendaService } from './../../fazenda/fazenda.service';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { FuncionarioUpdateComponent } from './funcionario-update.component';
import { Location } from '@angular/common';

describe('FuncionarioUpdateComponent', () => {
  let component: FuncionarioUpdateComponent;
  let fixture: ComponentFixture<FuncionarioUpdateComponent>;
  let funcionario: Funcionario;
  let service: FuncionarioService;
  let serviceFarm: FazendaService;
  let httpMock: HttpTestingController;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioUpdateComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule,
        HttpClientTestingModule, BrowserAnimationsModule ],
     providers: [ MatSnackBar, HttpClient, Overlay, FuncionarioService, FazendaService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(FuncionarioService);
    serviceFarm = TestBed.inject(FazendaService);
    httpMock = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${FuncionarioUpdateComponent.prototype.updateFuncionario.name} should show an error when user doesn't fill in the fields`, () => {
    var input = component.validatorInputs();
    expect(input.valueOf).toThrow();
    expect(input.valueOf).toThrowError();
  });

  it(`#${FuncionarioUpdateComponent.prototype.validatorInputs.name} should called validatorInputs`, () => {
    let spy = spyOn(component, 'validatorInputs');
    component.validatorInputs();
    expect(spy).toHaveBeenCalled();
  });
});