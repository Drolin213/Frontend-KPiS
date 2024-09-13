import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
