import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http'; // Nouvelle approche
import { HTTP_INTERCEPTORS } from '@angular/common/http'; // Si tu veux ajouter des interceptors

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    provideHttpClient() // Utiliser provideHttpClient ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

