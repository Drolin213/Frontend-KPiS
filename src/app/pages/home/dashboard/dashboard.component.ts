import { Component } from '@angular/core';
import { CargarScriptsService } from '../../../services/cargarScripts/cargar-scripts.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _CargaScripts: CargarScriptsService) {
    this._CargaScripts.cargar(['js/dashboard']);
  }
}
