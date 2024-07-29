import { CanActivateFn, UrlTree } from '@angular/router';
import { LoginService } from '../pages/login/service/login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
    
   return true
     
  if (!loginService.isLoggedIn) {
    return router.createUrlTree(['/login']);
  } else {
     return true;
  }
 };