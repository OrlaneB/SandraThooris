import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { ArtTherapyComponent } from '../../components/art-therapy/art-therapy.component';
import { BookACallComponent } from '../../components/book-acall/book-acall.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { LastBlogArticlesComponent } from '../../components/last-blog-articles/last-blog-articles.component';

@Component({
  selector: 'app-homepage',
  imports: [IntroComponent,ArtTherapyComponent,BookACallComponent,FaqComponent,LastBlogArticlesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
