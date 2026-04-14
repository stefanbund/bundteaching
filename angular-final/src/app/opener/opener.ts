import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for @if and @else
import { RouterLink } from '@angular/router';

@Component({
  selector: 'opener',
  imports: [CommonModule, RouterLink],
  templateUrl: './opener.html',
  styleUrl: './opener.css',
})
export class Opener {
  username: string = 'CIS Student';
  role: string = 'Undergraduate';
  profileImage: string = 'https://api.dicebear.com/7.x/bottts/svg?seed=Angular';
  //state:
  isLoggedIn: boolean = false;
  //logic, event binding
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
