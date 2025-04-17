import {Component} from "@angular/core"

@Component({
  selector:"app-contact-buttons",
  imports:[],
  templateUrl:"./contact-buttons.component.html",
  styleUrl:"./contact-buttons.component.css"
})

export class ContactButtons {
  email = "contact@sandra-arttherapie.fr"
  gmailLink = `https://mail.google.com/mail/?view=cm&to=${this.email}`;

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      console.log("Adresse mail copiée !");
    }, () => {
      console.log("Échec de la copie");
    });
  }
}
