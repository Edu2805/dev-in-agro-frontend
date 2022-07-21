import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FuncionarioCreateComponent } from './funcionario-create.component';

describe('FuncionarioCreateComponent', () => {
  let component: FuncionarioCreateComponent;
  let fixture: ComponentFixture<FuncionarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ FuncionarioCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${FuncionarioCreateComponent.prototype.isActive.name} should be active`, () => {
  //   const event = [{
  //     target: {
  //       checked: true
  //     }
  //   }]
  //   component.isActive(event);
  //   let spy = spyOn(component, 'isActive');
  //   expect(spy).toHaveBeenCalledTimes(1);
  });

  it(`#${FuncionarioCreateComponent.prototype.isActive.name} should not be active`, () => {
   
  });

  it(`#${FuncionarioCreateComponent.prototype.changeFarm.name} should be select a farm`, () => {
    // const fazenda = component.funcionario.fazenda;
    // expect(fazenda).toHaveBeenCalled();
  });

  it(`#${FuncionarioCreateComponent.prototype.validatorInputs.name} should be validate inputs`, () => {
    
    
  });

  it(`#${FuncionarioCreateComponent.prototype.createFuncionario.name} should show an error when user doesn't fill in the fields`, () => {
    var input = component.validatorInputs();
    expect(input.valueOf).toThrow();
    expect(input.valueOf).toThrowError();
  });

  it(`#${FuncionarioCreateComponent.prototype.validateCpf.name} should check if the cpf is in the format`, () => {
    let cpf = '80372385044';
    let compare = component.validateCpf(cpf);
    expect(compare).toBeTruthy();
    expect(cpf.length).toBe(11);
    expect(typeof cpf).toBe('string');
  });

  it(`#${FuncionarioCreateComponent.prototype.validateCpf.name} should check if the cpf is not in the format`, () => {
    let cpf = '8037238504434';
    let compare = component.validateCpf(cpf);
    expect(compare).toBeFalsy();
    expect(cpf.length).not.toBe(11);
  });

  it(`#${FuncionarioCreateComponent.prototype.cancel.name} should should redirect to /funcionario`, () => {
    
  });
});
