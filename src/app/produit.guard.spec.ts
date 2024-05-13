import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ProduitGuard } from './produit.guard';

describe('produitGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ProduitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
