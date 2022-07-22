import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { GraoService } from './grao.service';

describe('GraoService', () => {
  let service: GraoService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ MatSnackBarModule, HttpClientModule ],
    })
    service = TestBed.inject(GraoService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});