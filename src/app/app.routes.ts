import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MentionsLegales } from './pages/mentions-legales/mentions-legales.component';
import { BlogPage } from './pages/blog/blog.component';
import { AddArticle } from './pages/addArticle/addArticle.component';

export const routes: Routes = [
  { path: "accueil", component: HomepageComponent, title: "Sandra Thooris : Art Thérapie" },
  { path: "mentions-legales", component: MentionsLegales, title: "Art Thérapie : Mentions légales" },
  { path:"blog", component:BlogPage, title:"Blog - Art thérapie Sandra Thooris"},
  {path:"ajouter-article", component:AddArticle, title:"Blog - Ajouter un article"},
  { path: "", redirectTo: "accueil", pathMatch: "full" }
];

