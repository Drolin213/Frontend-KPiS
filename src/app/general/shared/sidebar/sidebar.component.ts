import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isBlogMenuExpanded = false;

  toggleBlogMenu() {
    this.isBlogMenuExpanded = !this.isBlogMenuExpanded;


  }
}
