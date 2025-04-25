import { Component, inject } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector:"add-article",
  templateUrl:"./addArticle.component.html",
  styleUrl:"./addArticle.component.css",
  imports:[FormsModule]
})

export class AddArticle {

  private router = inject(Router)

  constructor(private http:HttpClient) {}

  formData = {
    title:"",
    content:"",
  }

  onSubmit(articleData:NgForm){

    console.log(articleData.form.controls)

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post("http://sandrathooris/routes/postArticle.php", {
      title:this.formData.title,
      content:this.formData.content
    }, {headers})
    .subscribe(response=>{
      console.log(response)
    })

    this.router.navigate(['/blog'])
  }
}
