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
    {title:"Accompagner votre quotidien",text:"La vie apporte son lot de défis, et parfois, un petit coup de pouce aide à avancer. L’art-thérapie offre un espace pour déposer ce qui pèse, mieux gérer le stress ou simplement prendre soin de vous."},
    {title:"S’exprimer autrement",text:"Pas besoin de savoir dessiner ! Ce qui compte, c’est créer, explorer, et laisser parler vos émotions quand les mots manquent."},
    {title:"Se comprendre pour avancer", text:"Chaque création dévoile un peu plus de vous-même. Ensemble, nous ferons de ce voyage une étape vers un mieux-être."}
  ]
}
