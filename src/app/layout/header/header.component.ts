import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector:"app-header",
  templateUrl:"./header.component.html",
  styleUrl:"./header.component.css",
  standalone:true
})
export class Header {

  constructor(private viewPortScroller : ViewportScroller) {

  }

  scrollToAnchor(anchor:string){
    this.viewPortScroller.scrollToAnchor(anchor)
    window.scrollTo({
      top:window.scrollY,
      left:0});
  }

  // openWindow(link:string){
  //   window.open(link)
  // }
}
