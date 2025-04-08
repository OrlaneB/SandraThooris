import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class Footer {


  goToTop(){
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    })
  }
}
