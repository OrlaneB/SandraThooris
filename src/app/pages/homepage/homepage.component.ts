import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';

@Component({
  selector: 'app-homepage',
  imports: [IntroComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
