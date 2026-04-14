import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: '../app.css'
})
export class Profile {
  user = {
    name: 'Misko Hevery',
    title: 'Father of AngularJS',
    bio: 'I love making the web declarative and easy for everyone.'
  };
}
