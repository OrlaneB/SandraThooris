import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-book-acall',
  imports: [],
  templateUrl: './book-acall.component.html',
  styleUrl: './book-acall.component.css'
})
export class BookACallComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId:Object) {}

  infos = [
    {image:"mapIcon",text:"En visio, depuis n’importe où",id:0},
    {image:"euroIcon",text:"Séance découverte 40€, <br/> Puis séance de suivi 60€ <br/>Paiement par virement après la séance",id:1},
    {image:"peopleIcon", text:"Accompagnement en groupe/individuel <br/> pour associations ou établissements <br/>Devis sur-mesure par mail",id:2}
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
