import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { ArtTherapyComponent } from '../../components/art-therapy/art-therapy.component';

@Component({
  selector: 'app-homepage',
  imports: [IntroComponent,ArtTherapyComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
