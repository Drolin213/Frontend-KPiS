import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiUrl = 'http://localhost:3000/rol'; // URL base para los endpoints de roles

  constructor(private http: HttpClient) {}

  listRol(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`); // Endpoint para listar roles
  }

  createRol(rolData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, rolData); // Endpoint para crear un rol
  }

  getRolById(ID_Rol: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${ID_Rol}`);
  }

  updateRol(ID_Rol: number, rolData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateRol/${ID_Rol}`, rolData);
  }

  deleteRol(ID_Rol: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteRol/${ID_Rol}`);
  }

}
