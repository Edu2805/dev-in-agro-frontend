import { Observable, of } from 'rxjs';
import { FuncionarioService } from './../funcionario.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioReadComponent } from './funcionario-read.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('FuncionarioReadComponent', () => {
  let component: FuncionarioReadComponent;
  let fixture: ComponentFixture<FuncionarioReadComponent>;
  let funcionarioMock = null;

  class FuncionarioMock {
    list(): Observable<any[]> {
      return funcionarioMock;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ FuncionarioReadComponent ], 
      providers: [
        {provider: FuncionarioService, useClass: FuncionarioMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${FuncionarioReadComponent.prototype.ngOnInit.name} should render employee list title`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Funcionários da empresa');
  });

  it(`#${FuncionarioReadComponent.prototype.ngOnInit.name} should render employee list`, () => {
    // const dadosMock = [
    //   { 
    //     nome: 'Carlos', 
    //     fazenda: 'Fazenda teste', 
    //     data: '2022-07-01',
    //     update: 'Update teste',
    //     cpf: '95932548037',
    //     telefone: '4877665544',
    //     cargo: 'Gerente',
    //     ativo: true
    //   }
    // ]

    // funcionarioMock = of(dadosMock);
    // const lines = fixture.debugElement.queryAll(By.css('tbody'));

    // expect(lines[0].nativeElement.innerHTML).toBe(dadosMock[0].nome);
  });
});
