import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  constructor(private viewPortScroller : ViewportScroller) {

  }

  scrollToAnchor(anchor:string){
    this.viewPortScroller.scrollToAnchor(anchor)
    window.scrollTo({
      top:window.scrollY,
      left:0});
  }

  contact(){
    window.open("mailto:contact@sandra-arttherapie.fr")
  }
}
