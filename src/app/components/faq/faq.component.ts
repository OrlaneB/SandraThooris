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
        question: "Dois-je savoir dessiner pour faire de l’art-thérapie ?",
        answer: "Pas du tout ! L’art-thérapie ne repose pas sur la technique ou le talent artistique, mais sur l’expression de soi. Peu importe le résultat, ce qui compte, c’est le processus créatif.",
        id:0
    },
    {
        question: "Les séances en visio, ça marche vraiment ?",
        answer: "Oui, tout à fait ! Les séances en visio permettent un accompagnement efficace dans le confort de votre espace. Il suffit d’un endroit calme et du matériel recommandé pour profiter pleinement de la séance.",
        id:1
    },
    {
        question: "Puis-je essayer l'art-thérapie même si je vais bien ?",
        answer: "Bien sûr. L’art-thérapie n’est pas réservée aux moments difficiles. C’est aussi un outil pour mieux vous connaître, prendre confiance en vous, ou simplement explorer vos émotions différemment.",
        id:2
    },
    {
        question: "Quels matériaux dois-je prévoir pour une séance ?",
        answer: "Cela dépend de la séance et de vos préférences. Généralement, quelques feuilles de papier, des crayons, feutres ou peintures suffisent. Je vous indiquerai en amont si un matériel spécifique est nécessaire.",
        id:3
    },
    {
        question: "Est-ce que l'art-thérapie est remboursée ?",
        answer: "L’art-thérapie n’est pas remboursée par la Sécurité sociale. Toutefois, certaines mutuelles proposent une prise en charge partielle. Renseignez-vous auprès de la vôtre.",
        id:4
    }
];

}
