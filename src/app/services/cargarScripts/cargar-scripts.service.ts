import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptsService {

  constructor() { }

  cargar(archivos: string[]) {
    archivos.forEach(archivo => {
      if (!this.scriptAlreadyLoaded(archivo)) {
        const script = document.createElement('script');
        // Añade el prefijo assets/ automáticamente
        script.src = `assets/${archivo}.js`;
        script.async = true; // Carga el script de forma asíncrona

        document.body.appendChild(script);
      }
    });
  }

  private scriptAlreadyLoaded(archivo: string): boolean {
    return Array.from(document.getElementsByTagName('script'))
      .some(script => script.src.includes(archivo + '.js'));
  }
}
