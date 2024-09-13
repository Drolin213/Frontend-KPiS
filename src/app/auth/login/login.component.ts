import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    name_user: '',
    password: ''
  };

  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    this.authService.signIn(this.user).subscribe(
      (res: any) => {
        // Si la autenticación es exitosa, almacena el token en una cookie
        this.cookieService.set('token', res.response.token, 1, '/', '', true, 'Strict');
        this.router.navigate(['home']);
      },
      (err) => {
        // Si hay un error (por ejemplo, credenciales incorrectas), muestra una alerta
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: 'El nombre de usuario o la contraseña son incorrectos.',
          confirmButtonText: 'Intentar de nuevo'
        });
      }
    );
  }
}
