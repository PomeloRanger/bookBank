import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-genre',
  templateUrl: './book-genre.page.html',
  styleUrls: ['./book-genre.page.scss'],
})
export class BookGenrePage implements OnInit {
  
  constructor(private route: ActivatedRoute, private router : Router, private categoryService: CategoryService)
  {

  }

  books : Book[];

  ngOnInit()
  {
    let stringId = this.route.snapshot.paramMap.get("id")
    let numId = Number(stringId);

    this.categoryService.getBooksByCategory(numId).subscribe(books => {
      this.books = books;
    });
  }
}
