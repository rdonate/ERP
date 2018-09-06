import { RouterModule, Routes } from '@angular/router';

// Componenets
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'news', component: HomeComponent},
  { path: 'contact', component: HomeComponent},
  { path: 'about', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
