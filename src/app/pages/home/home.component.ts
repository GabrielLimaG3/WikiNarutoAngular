import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TitleBlogComponent } from "../../components/title-blog/title-blog.component";
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, TitleBlogComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
