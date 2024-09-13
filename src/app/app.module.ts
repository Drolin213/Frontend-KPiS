import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CargarScriptsService } from './services/cargarScripts/cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { GeneralModule } from './general/general.module';
import { Error400Component } from './general/Error/error400/error400.component';
import { Error500Component } from './general/Error/error500/error500.component';
import { Error404Component } from './general/Error/error404/error404.component';
import { HomeModule } from './pages/home/home.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    Error400Component,
    Error500Component,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule,
    HomeModule,
    GeneralModule,
  ],
  exports: [GeneralModule, HomeModule],
  providers: [
    CargarScriptsService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private _CargaScripts: CargarScriptsService) {
    this._CargaScripts.cargar(['js/app.min', 'js/sidebarmenu']);
  }

}
