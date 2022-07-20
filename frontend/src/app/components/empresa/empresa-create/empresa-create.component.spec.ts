import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmpresaCreateComponent } from './empresa-create.component';

describe(`#${EmpresaCreateComponent.name}`, () => {
  let component: EmpresaCreateComponent;
  let fixture: ComponentFixture<EmpresaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ EmpresaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${EmpresaCreateComponent.prototype.togglePassword.name} should show password field`, () => {
    component.passwordShow = true;
    component.togglePassword();
    expect(component.passwordType).toEqual('password');
  });

  it(`#${EmpresaCreateComponent.prototype.togglePassword.name} should show text field`, () => {
    component.passwordShow = false;
    component.togglePassword();
    expect(component.passwordType).toEqual('text');
  });

  it(`#${EmpresaCreateComponent.prototype.togglePassword.name} should show passwordShow false`, () => {
    component.passwordShow = true;
    component.togglePassword();
    expect(component.passwordShow).toBeFalse();
  });

  it(`#${EmpresaCreateComponent.prototype.togglePassword.name} should show passwordShow true`, () => {
    component.passwordShow = false;
    component.togglePassword();
    expect(component.passwordShow).toBeTrue();
  });

  it(`#${EmpresaCreateComponent.prototype.toggleRetypePassword.name} should show passwordShow2 field`, () => {
    component.passwordShow2 = true;
    component.toggleRetypePassword();
    expect(component.passwordType2).toEqual('password');
  });

  it(`#${EmpresaCreateComponent.prototype.toggleRetypePassword.name} should show text field`, () => {
    component.passwordShow2 = false;
    component.toggleRetypePassword();
    expect(component.passwordType2).toEqual('text');
  });

  it(`#${EmpresaCreateComponent.prototype.createEmpresa.name} should go through create Empresa`, () => {
    expect(component.createEmpresa).toBeTruthy();
  });

  it(`#${EmpresaCreateComponent.prototype.toggleRetypePassword.name} should go through toggle Retype Password`, () => {
    expect(component.togglePassword).toBeTruthy();
  });

  it(`#${EmpresaCreateComponent.prototype.toggleRetypePassword.name} should show passwordShow2 true`, () => {
    component.passwordShow2 = false;
    component.toggleRetypePassword();
    expect(component.passwordShow2).toBeTrue();
  });

  it(`#${EmpresaCreateComponent.prototype.toggleRetypePassword.name} should show passwordShow2 true`, () => {
    component.passwordShow2 = false;
    component.toggleRetypePassword();
    expect(component.passwordShow2).toBeTrue();
  });

  it(`#${EmpresaCreateComponent.prototype.createEmpresa.name} should show an error when user doesn't fill in the fields`, () => {
    var input = component.inputValidator();
    expect(input.valueOf).toThrow();
    expect(input.valueOf).toThrowError();
  });

  it(`#${EmpresaCreateComponent.prototype.validatePassword.name} should campare password is equal`, () => {
    let password1 = '123456';
    let password2 = '123456';
    let compare = component.validatePassword(password1, password2);
    expect(compare).toBeTruthy();
    expect(typeof password1).toBe('string');
    expect(typeof password2).toBe('string');
  });

  it(`#${EmpresaCreateComponent.prototype.validatePassword.name} should campare password is not equal`, () => {
    let password1 = '123456';
    let password2 = '654321';
    let compare = component.validatePassword(password1, password2);
    expect(compare).toBeFalsy();
    expect(typeof password1).toBe('string');
    expect(typeof password2).toBe('string');
  });

  it(`#${EmpresaCreateComponent.prototype.validateCnpj.name} should check if the cnpj is in the format`, () => {
    let cnpj = '09733485000105';
    let compare = component.validateCnpj(cnpj);
    expect(compare).toBeTruthy();
    expect(cnpj.length).toBe(14);
    expect(typeof cnpj).toBe('string');
  });

  it(`#${EmpresaCreateComponent.prototype.validateCnpj.name} should check if the cnpj is not in the format`, () => {
    let cnpj = '0973348500010523';
    let compare = component.validateCnpj(cnpj);
    expect(compare).toBeFalsy();
    expect(cnpj.length).not.toBe(14);
  });

  it(`#${EmpresaCreateComponent.prototype.validateEmail.name} should check if the email is in the format`, () => {
    let email = 'fazenda@fazenda.com.br';
    let compare = component.validateEmail(email);
    expect(compare).toBeTruthy();
    expect(typeof email).toBe('string');
  });

  it(`#${EmpresaCreateComponent.prototype.validateEmail.name} should check if the email is not in the format`, () => {
    let email = 'fazenda@fazenda.com.br.we.oo';
    let compare = component.validateEmail(email);
    expect(compare).toBeFalsy();
  });
});