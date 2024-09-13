import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalglobalComponent } from 'src/app/pages/home/modalglobal/modalglobal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsGlobalService {
  constructor(
    public _dialog: MatDialog
  ) {}


  openModal(data: TemplateRef<HTMLElement>): void {
    const dialogRef = this._dialog.open(ModalglobalComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('the dialog was closed');
    })
  }

  closeModal(): void {
    this._dialog.closeAll();
  }
}
