import { Component } from '@angular/core';

@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrl:"./header.component.css",
  standalone:true
})
export class Header {



  scrollToAnchor(anchor: string) {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  // openWindow(link:string){
  //   window.open(link)
  // }
}
