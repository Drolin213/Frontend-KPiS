import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { HomeComponent } from "./home.component";
import { authGuard } from "../../guard/auth.guard";
import { RolComponent } from "./rol/rol.component";
import { AreaComponent } from "./area/area.component";
import { ContratoComponent } from "./contrato/contrato.component";


const routes: Routes = [
    {
        path: '',
        component: HomeComponent, canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {   path: 'usuarios',
                component: UsuariosComponent
            },
            {   path: 'rol',
                component: RolComponent
            },
            {   path: 'area',
                component: AreaComponent
            },
            {   path: 'contrato',
                component: ContratoComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
