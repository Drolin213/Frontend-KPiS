import { ChangeDetectionStrategy, Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';  // Importar CommonModule

const MATERIAL_MODULES = [MatDialogModule, MatFormFieldModule, MatInputModule];

@Component({
  selector: 'app-modalglobal',
  templateUrl: './modalglobal.component.html',
  styleUrls: ['./modalglobal.component.css'],
  standalone: true,
  imports: [CommonModule, MATERIAL_MODULES], // Asegúrate de agregar CommonModule aquí
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalglobalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalglobalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TemplateRef<HTMLElement>,
  ) {}
}
