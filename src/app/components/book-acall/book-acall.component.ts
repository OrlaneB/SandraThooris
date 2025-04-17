 import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ContactButtons } from '../contact-buttons/contact-buttons.component';

@Component({
  selector: 'app-book-acall',
  imports: [ContactButtons],
  templateUrl: './book-acall.component.html',
  styleUrl: './book-acall.component.css'
})
export class BookACallComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId:Object) {}

  infos = [
    {image:"mapIcon",text:"<p>Accompagnement individuel en visio</p>",id:0},
    {image:"euroIcon",text:"<ul class='custom-list'><li>La première séance : 40€</li> <li>Séances de suivi : 60€</li><li>Paiement par virement après la séance</li></ul>",id:1},
    {image:"peopleIcon", text:"<p>Interventions en associations, structures, en individuel ou pour des groupes :<br/> devis sur demande par mail</p>",id:2}
  ]

   ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }
}
