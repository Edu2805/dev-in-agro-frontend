import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraoCreateComponent } from './grao-create.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { GraoService } from '../grao.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GraoCreateComponent', () => {
  let component: GraoCreateComponent;
  let fixture: ComponentFixture<GraoCreateComponent>;
  let graoService: GraoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoCreateComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, 
        RouterTestingModule, OverlayModule, BrowserAnimationsModule ],
      providers: [ MatSnackBar, HttpClient, Overlay, GraoService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    graoService = TestBed.inject(GraoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${GraoCreateComponent.prototype.criaGrao.name} should go through create Grão`, () => {
    expect(component.criaGrao).toBeTruthy();
  });

  it(`#${GraoCreateComponent.prototype.criaGrao.name} should show an error when user doesn't fill in the fields`, () => {
    var input = component.validatorInputs();
    expect(input.valueOf).toThrow();
    expect(input.valueOf).toThrowError();
  });

  it(`#${GraoCreateComponent.prototype.criaGrao.name} should criaGrao is called`, () => {
    let spy = spyOn(component, 'criaGrao');
    component.criaGrao();
    expect(spy).toHaveBeenCalled();
  });

  it(`#${GraoCreateComponent.prototype.cancel.name} should cancel is called`, () => {
    let spy = spyOn(component, 'cancel');
    component.cancel();
    expect(spy).toHaveBeenCalled();
  });
});
