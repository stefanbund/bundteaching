import { Routes } from '@angular/router';
import { ComponentOne } from './component-one/component-one';
import { ComponentTwo } from './component-two/component-two';
import { ComponentThree } from './component-three/component-three';

export const routes: Routes = [
  { path: 'one', component: ComponentOne },
  { path: 'two', component: ComponentTwo },
  { path: 'three', component: ComponentThree },
  { path: '', redirectTo: '/one', pathMatch: 'full' }
];
