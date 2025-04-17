import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [NgClass],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  opened:number|null =null;

  openAnswer(id:number){
    if(id===this.opened){
      this.opened=null;
    } else {
      this.opened=id;
    }
  }

  faq = [
    {
        question: "Qui est concerné ?",
        answer: "Tout adulte, adolescent qui ressent le besoin de s’exprimer, extérioriser des émotions, des pensées, se (re)découvrir à travers sa créativité ou qui souhaite un accompagnement pour traverser une période difficile ou un changement de vie. Les enfants qui parlent mieux avec des crayons qu’avec des mots. Toute personne curieuse de tenter une approche qui mêle jeu, expression et exploration intérieure.",
        id:0
    },
    {
        question: "Et si je ne me sens pas créatif ?",
        answer: "Nul besoin d’être créatif, pas besoin de savoir dessiner, coller droit ou « faire joli ». Ce qui est important, c’est son ressenti, l’expérience vécue durant la création. La créativité, c’est aussi s’autoriser à essayer, expérimenter et trouver ses propres solutions à un problème, pas de mode d’emploi !",
        id:1
    },
    {
        question: "En visio, qu’est-ce que ça change ?",
        answer: "L’art thérapie peut se vivre à distance : un salon, un coin bureau ou toute autre pièce peuvent devenir des espaces créatifs ! . Pas besoin de beaucoup de matériel : quelques feuilles, des crayons, un peu de colle ou de peinture peuvent suffire. Et si vous n’avez rien sous la main, pas de soucis, on s’adapte ensemble !",
        id:2
    },
    {
        question: " Que fait-on pendant la première séance ?",
        answer: "Lors de la première séance, on discute de votre demande, on prend le temps de faire connaissance. On échange autour de ce qui vous amène, ce que vous ressentez, ce que vous aimeriez explorer ou apaiser. Même si ce n’est pas très clair au début, ça fonctionne aussi !",
        id:3
    },
    {
        question: "Que fait-on pendant les séances de suivi ?",
        answer: "Lors des séances de suivi, à partir de différentes propositions créatives (dessin, collage, assemblage, modelage, écriture, ...), vous avancez à votre rythme. Chaque séance est un temps pour soi, un espace où déposer, créer, transformer. On échange à partir de la production, sur ce que vous venez de vivre, ou on laisse simplement la création parler. Une séance dure généralement entre 1h et 1h30.",
        id:4
    }
];

}
