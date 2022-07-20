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

  it(`#${EmpresaCreateComponent.prototype.togglePassword.name} should show password field`, () => {
    var showPassword = component.passwordShow;
    showPassword = true;
    
    component.togglePassword();
    expect(showPassword).toBeTrue();

  });
});
