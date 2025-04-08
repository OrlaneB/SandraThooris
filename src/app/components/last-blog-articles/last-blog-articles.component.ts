import { Component } from '@angular/core';
import { ArticleServiceJSON } from '../../utilities/ArticleServiceJSON.service';

interface Article {
  title:string,
  content:string,
  date:string,
  id:number
}

@Component({
  selector: 'app-last-blog-articles',
  imports: [],
  templateUrl: './last-blog-articles.component.html',
  styleUrl: './last-blog-articles.component.css',
  standalone:true
})
export class LastBlogArticlesComponent {

  articles: Article[] = [];
  lastArticle :Article|null = null;

  constructor(private articleService: ArticleServiceJSON) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe(data => {

      const sortedArticles = data.articles.sort((a:any,b:any)=>{

        const aDate = new Date(a.date).getTime()
        const bDate = new Date(b.date).getTime()
        return bDate-aDate;
      });

      // console.log(sortedArticles)

      this.lastArticle = sortedArticles[0];
      for(let i = 0; i<3; i++){
        this.articles.push(sortedArticles[i])
      }

      // console.log(this.lastArticle);
    });
  }
}
