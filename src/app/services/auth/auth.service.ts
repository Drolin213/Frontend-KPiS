import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service'; // Importa el servicio de cookies

interface User {
  name_user: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private cookieService: CookieService // Inyecta el servicio de cookies
  ) {}

  signIn(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate/login/`, user);
  }

  isAuth(): boolean {
    const token = this.cookieService.get('token'); // Obtiene el token de la cookie
    if (!token || this.jwtHelper.isTokenExpired(token)) {
      return false;
    }
    return true;
  }
}
