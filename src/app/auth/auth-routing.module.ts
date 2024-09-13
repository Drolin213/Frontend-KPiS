import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecoverPasswordComponent } from "./recoverPassword/recover-password.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'recover',
        component: RecoverPasswordComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule { }