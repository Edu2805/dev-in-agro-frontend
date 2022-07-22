import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpresaReadComponent } from './empresa-read.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmpresaReadComponent', () => {
  let component: EmpresaReadComponent;
  let fixture: ComponentFixture<EmpresaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaReadComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule ],
      providers: [ MatSnackBar, HttpClient, Overlay ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
