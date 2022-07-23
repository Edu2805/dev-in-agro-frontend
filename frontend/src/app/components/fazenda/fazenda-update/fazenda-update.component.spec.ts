import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FazendaUpdateComponent } from './fazenda-update.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('FazendaUpdateComponent', () => {
  let component: FazendaUpdateComponent;
  let fixture: ComponentFixture<FazendaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaUpdateComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule ],
      providers: [ MatSnackBar, HttpClient, Overlay ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${FazendaUpdateComponent.prototype.updateFazenda.name} should show an error when user doesn't fill in the fields`, () => {
    var input = component.validatorInputs();
    expect(input.valueOf).toThrow();
    expect(input.valueOf).toThrowError();
  });

  it(`#${FazendaUpdateComponent.prototype.ngOnInit.name} should called ngOnInit`, () => {
    let spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it(`#${FazendaUpdateComponent.prototype.validatorInputs.name} should called validatorInputs`, () => {
    let spy = spyOn(component, 'validatorInputs');
    component.validatorInputs();
    expect(spy).toHaveBeenCalled();
  });
});
