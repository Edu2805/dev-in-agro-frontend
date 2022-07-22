import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FuncionarioService } from './funcionario.service';

describe('FuncionarioService', () => {
  let service: FuncionarioService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, HttpClientModule ]
    });
    service = TestBed.inject(FuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});