import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
// isCollapsed=false;
// toggleSidebar(){
//    this.isCollapsed=!this.isCollapsed;
// }
}
