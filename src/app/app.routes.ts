import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MentionsLegales } from './pages/mentions-legales/mentions-legales.component';

export const routes: Routes = [
  { path: "accueil", component: HomepageComponent, title: "Sandra Thooris : Art Thérapie" },
  { path: "mentions-legales", component: MentionsLegales, title: "Art Thérapie : Mentions légales" },
  { path: "", redirectTo: "accueil", pathMatch: "full" }
];

