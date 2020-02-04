import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private bookService : BookService) { }

  allBooks : Book[]=[];

  ngOnInit() 
  {
    this.bookService.getAllBooks()
      .subscribe(books => this.allBooks = books);
  }

  goToPage(id:number)
  {
    this.router.navigate(['/book-detail', id]);
  }
}