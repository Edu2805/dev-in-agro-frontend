import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraoReadComponent } from './grao-read.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('GraoReadComponent', () => {
  let component: GraoReadComponent;
  let fixture: ComponentFixture<GraoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoReadComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule ],
      providers: [ MatSnackBar, HttpClient, Overlay ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
