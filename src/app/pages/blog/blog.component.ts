import { Component } from "@angular/core";
import { BlogGrid } from "../../components/blog/blogGrid/blogGrid.component";
import { RouterLink } from "@angular/router";

@Component({
  selector:"app-blog-page",
  templateUrl:"./blog.component.html",
  styleUrl:"./blog.component.css",
  imports:[BlogGrid,RouterLink]
})

export class BlogPage {

}
