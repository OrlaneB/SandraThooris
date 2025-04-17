import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-art-therapy',
  imports: [NgClass],
  templateUrl: './art-therapy.component.html',
  styleUrl: './art-therapy.component.css'
})
export class ArtTherapyComponent {

  step:number = 0;

  changeStep(num:number){
    this.step=num;
  }

  explanations = [
    {title:"Accompagner votre quotidien",text:"La vie apporte son lot de défis... Parfois, on a besoin d’un élan pour avancer. L’art thérapie offre un espace pour déposer ce que l’on porte, mettre ses émotions en couleur plutôt qu’en boule, peindre ses épreuves au lieu de les ruminer ou coller les morceaux autrement !"},
    {title:"S’exprimer autrement",text:"Pas besoin de se sentir artiste, ni même de savoir dessiner. Pas besoin non plus de savoir quoi dire, ni quoi faire. Juste créer, tester, explorer, ressentir : ça fait du bien !"},
    {title:"Se (re)découvrir", text:"À l’aide d’un pinceau, de la colle, d’un crayon ou de l’argile...  vous créez ! Ce que vous vivez durant le temps de création dévoile un peu plus de vous-même. Vous n’êtes pas seul(e) ! On avance ensemble, à la recherche de mieux-être."}
  ]
}
