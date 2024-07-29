import { Injectable, PLATFORM_ID, Inject, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  router = inject(Router)

  login(email: string, password: string) {
    // Simula la autenticación y obtención de token desde el servidor
    const token = 'token_de_prueba';
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  get isLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
  logout() {
    // Eliminar el token del local storage
    localStorage.removeItem('token');

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigateByUrl("/login")
  }
}
