import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioReadComponent } from './funcionario-read.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('FuncionarioReadComponent', () => {
  let component: FuncionarioReadComponent;
  let fixture: ComponentFixture<FuncionarioReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ FuncionarioReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
