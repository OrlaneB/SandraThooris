import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrl:"./header.component.css",
  standalone:true,
  imports:[RouterLink]
})
export class Header {


  scrollToAnchor(anchor: string) {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



}
