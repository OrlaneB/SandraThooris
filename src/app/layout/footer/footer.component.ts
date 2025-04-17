import { Component } from '@angular/core';
import { ContactButtons } from '../../components/contact-buttons/contact-buttons.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [ContactButtons,RouterLink],
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
