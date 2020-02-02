import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router, private bookService: BookService) 
  { 

  }

  book : Book;

  ngOnInit()
  {
    let stringId = this.route.snapshot.paramMap.get("id")
    let numId = Number(stringId);
    this.bookService.getBooksById(numId).then(result => {
      if (result == null)
      {
        this.router.navigate(['/tabs/home']);
      }
      this.book = result;
    });
  }
}
