import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service'; // Ajusta la ruta según tu estructura

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isAuth()) {
    router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
    return false;
  }
  return true;
};
