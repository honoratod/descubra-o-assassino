import { TestBed } from '@angular/core/testing';

import { InvestigacaoService } from './investigacao.service';

describe('InvestigacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestigacaoService = TestBed.get(InvestigacaoService);
    expect(service).toBeTruthy();
  });
});
