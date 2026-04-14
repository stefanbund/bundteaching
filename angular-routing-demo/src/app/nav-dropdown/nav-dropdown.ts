import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-dropdown',
  imports: [],
  templateUrl: './nav-dropdown.html',
  styleUrl: './nav-dropdown.css',
})
export class NavDropdown {
  constructor(private router: Router) {}

  onNavChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const path = selectElement.value;
    if (path) {
      this.router.navigate([path]);
    }
  }
}
