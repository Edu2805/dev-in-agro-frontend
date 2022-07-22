import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuncionarioDeleteComponent } from './funcionario-delete.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('FuncionarioDeleteComponent', () => {
  let component: FuncionarioDeleteComponent;
  let fixture: ComponentFixture<FuncionarioDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioDeleteComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule ],
      providers: [ MatSnackBar, HttpClient, Overlay ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
