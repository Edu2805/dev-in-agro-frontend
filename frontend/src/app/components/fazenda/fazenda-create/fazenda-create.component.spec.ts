import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { FazendaCreateComponent } from './fazenda-create.component';

describe('FazendaCreateComponent', () => {
  let component: FazendaCreateComponent;
  let fixture: ComponentFixture<FazendaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaCreateComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule ],
      providers: [ MatSnackBar, HttpClient, Overlay ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});