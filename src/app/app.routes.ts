import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'fotos', loadComponent: () => import('./pages/fotos/fotos.component').then(m => m.FotosComponent) },
  { path: 'narroparty', loadComponent: () => import('./pages/narroparty/narroparty.component').then(m => m.NarropartyComponent) },
  { path: 'impressum', loadComponent: () => import('./pages/impressum/impressum.component').then(m => m.ImpressumComponent) },
  { path: 'datenschutz', loadComponent: () => import('./pages/datenschutz/datenschutz.component').then(m => m.DatenschutzComponent) },
  { path: 'members', loadComponent: () => import('./pages/members/members.component').then(m => m.MembersComponent) },
  { path: '**', redirectTo: '' }
];
