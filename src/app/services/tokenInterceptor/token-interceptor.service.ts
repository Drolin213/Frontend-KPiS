import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private cookieService: CookieService,
    private router: Router
   ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.cookieService.get('token');
    //console.log(token);

    let req = request;
    if (token) {
        req = request.clone({
            setHeaders: {
              authorization: `Bearer ${token}`
            }
        });
    }
    return next.handle(req);
  }
}
