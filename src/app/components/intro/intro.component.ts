import { Component } from '@angular/core';
import { ContactButtons } from '../contact-buttons/contact-buttons.component';


@Component({
  selector: 'app-intro',
  imports: [ContactButtons],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {


  scrollToAnchor(anchor: string) {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  contact(){
    window.open("mailto:contact@sandra-arttherapie.fr")
  }
}
