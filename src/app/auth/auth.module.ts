import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { LoginRoutingModule } from "./auth-routing.module";
import { CommonModule } from "@angular/common";
import { RecoverPasswordComponent } from "./recoverPassword/recover-password.component";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptorService } from "../services/tokenInterceptor/token-interceptor.service";

@NgModule({
    declarations: [
        LoginComponent,
        RecoverPasswordComponent,
        AuthComponent
    ],
    imports: [
        LoginRoutingModule,
        CommonModule,
        HttpClientModule,
        RouterModule,
        FormsModule
    ],
    providers: [
      CookieService,
      { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
      JwtHelperService,
      BrowserModule,
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
