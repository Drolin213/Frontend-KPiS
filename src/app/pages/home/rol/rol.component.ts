import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RolService } from '../../../services/servicioRol/rol.service';
import { ModalsGlobalService } from '../../../services/models/modals-global.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {

  nuevoRol = {
    Nombre_Rol: ''
  };

  rolModal = {
    Nombre_Rol: '',
    ID_Rol: 0
  };

  roles: any[] = [];
  paginatedRoles: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 1;
  pages: number[] = [];

  @ViewChild('modalAtualizarRol') modalAtualizarRolRef!: TemplateRef<HTMLElement>;

  constructor(
    private dialogService: ModalsGlobalService,
    private rolService: RolService
  ) { }

  ngOnInit(): void {
    this.rolService.listRol().subscribe(
      (data) => {
        if (data.success) {
          this.roles = data.response;
          this.setupPagination();
          this.updatePaginatedRoles();
        }
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }

  crearRol(): void {
    if (this.nuevoRol.Nombre_Rol) {
      this.rolService.createRol(this.nuevoRol).subscribe(
        (response) => {
          if (response.success) {
            Swal.fire({
              icon: 'success',
              title: 'Rol Creado',
              text: 'El rol se ha creado correctamente.',
              confirmButtonText: 'Aceptar'
            });

            this.roles.push(response.rol);
            this.setupPagination();
            this.updatePaginatedRoles();
            this.nuevoRol.Nombre_Rol = '';
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error al Crear el Rol',
              text: response.error || 'Ocurrió un error al crear el rol.',
              confirmButtonText: 'Aceptar'
            });
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error en la Solicitud',
            text: error.message || 'Ocurrió un error al realizar la solicitud.',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Nombre del Rol Requerido',
        text: 'Por favor, ingresa un nombre para el rol antes de continuar.',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  onClickNewContact(idRol: number): void {
    this.rolService.getRolById(idRol).subscribe(
      (data) => {
        if (data.response) {
          this.rolModal = { ...data.response }; // Destructuración para asignar todos los valores
          this.dialogService.openModal(this.modalAtualizarRolRef);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al obtener el Rol',
            text: 'No se pudo obtener el rol.',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error en la Solicitud',
          text: error.message || 'Ocurrió un error al realizar la solicitud.',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  updateRol(): void {
    if (this.rolModal.Nombre_Rol) {
      this.rolService.updateRol(this.rolModal.ID_Rol, this.rolModal).subscribe(
        (response) => {
          if (response.success) {
            Swal.fire({
              icon: 'success',
              title: 'Rol Actualizado',
              text: 'El rol se ha actualizado correctamente.',
              confirmButtonText: 'Aceptar'
            });

            const index = this.roles.findIndex(rol => rol.ID_Rol === this.rolModal.ID_Rol);
            if (index !== -1) {
              this.roles[index] = { ...this.rolModal }; // Destructuración para actualizar el rol
              this.setupPagination();
              this.updatePaginatedRoles();
            }

            this.closeDialogo();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error al Actualizar el Rol',
              text: response.error || 'Ocurrió un error al actualizar el rol.',
              confirmButtonText: 'Aceptar'
            });
          }
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error en la Solicitud',
            text: error.message || 'Ocurrió un error al realizar la solicitud.',
            confirmButtonText: 'Aceptar'
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Nombre del Rol Requerido',
        text: 'Por favor, ingresa un nombre para el rol antes de continuar.',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  deleteRol(idRol: number): void {
    this.rolService.deleteRol(idRol).subscribe(
      (response) => {
        if (response.success) {
          Swal.fire({
            icon: 'success',
            title: 'Rol Eliminado',
            text: 'El rol se ha eliminado correctamente.',
            confirmButtonText: 'Aceptar'
          });

          this.roles = this.roles.filter(rol => rol.ID_Rol !== idRol);
          this.setupPagination();
          this.updatePaginatedRoles();
          this.closeDialogo();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error al Eliminar el Rol',
            text: response.error || 'Ocurrió un error al eliminar el rol.',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error en la Solicitud',
          text: error.message || 'Ocurrió un error al realizar la solicitud.',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  closeDialogo(): void {
    this.dialogService.closeModal();
  }

  setupPagination(): void {
    this.totalPages = Math.ceil(this.roles.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  updatePaginatedRoles(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedRoles = this.roles.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedRoles();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedRoles();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedRoles();
    }
  }
}
