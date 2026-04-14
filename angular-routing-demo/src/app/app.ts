import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavDropdown } from './nav-dropdown/nav-dropdown';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavDropdown],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-routing-demo');
}
