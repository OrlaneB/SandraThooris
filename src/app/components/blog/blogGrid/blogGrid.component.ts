import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError } from "rxjs/operators";

@Component({
  selector:"blogGrid",
  templateUrl:"./blogGrid.component.html",
  styleUrl:"./blogGrid.component.css"
})

export class BlogGrid implements OnInit{

  articles:any=[];
  errorMessage:string = "";

  constructor(private http: HttpClient){}

  getArticles(){
    this.http.get("http://sandrathooris/routes/getArticles.php")
    .pipe(
      catchError(err=>{
        this.errorMessage = "Erreur de récupération des données";
        throw err;
      })
    )
    .subscribe(
      (response)=>{
      this.articles = response;
      console.log(response)},
      (error) =>{
        console.error(error);
      }
  )
  }

  ngOnInit(): void {
    this.getArticles()
  }
}
