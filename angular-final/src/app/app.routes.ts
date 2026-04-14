import { Routes } from '@angular/router';
import { Opener } from './opener/opener';
import { Home } from './home/home';
import { Profile } from './profile/profile';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'opener', component: Opener },
  { path: 'profile', component: Profile },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
