import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';





export const ProduitGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  if(!auth.SignIn) {
    return false;
  }
  return true;
};