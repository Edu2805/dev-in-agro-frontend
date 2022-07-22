import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FazendaService } from './fazenda.service';

describe('FazendaService', () => {
  let service: FazendaService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, HttpClientModule ]
    })
    service = TestBed.inject(FazendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});