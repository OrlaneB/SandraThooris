import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { ArtTherapyComponent } from '../../components/art-therapy/art-therapy.component';
import { BookACallComponent } from '../../components/book-acall/book-acall.component';

@Component({
  selector: 'app-homepage',
  imports: [IntroComponent,ArtTherapyComponent,BookACallComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
