import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Publisher } from '../models/publisher';
import { Category } from '../models/category';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})

export class BookService {
	/*
		Everything here is client-sided. To be migrated to call from API.
		https://angular.io/guide/http
	*/
	constructor() 
	{
		this.allBooks = [
			new Book(1, 
				"Anita and Me", 
				"https://books.google.com/books/content/images/frontcover/YI2Psg-DeWEC?fife=w200-h300", 
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa tellus, sagittis et nulla in, molestie ullamcorper metus. In in lobortis dui, ac facilisis enim. Aenean eu ipsum eu lorem suscipit vehicula. Vestibulum a dolor enim. Praesent rhoncus erat auctor, porttitor odio quis, dignissim tortor. Sed euismod orci sodales, sodales lectus congue, vulputate ante. Cras congue blandit enim, tincidunt dapibus nulla ornare quis. Suspendisse pretium, augue eu luctus pulvinar, risus est imperdiet nisl, nec porta mauris magna at nulla. Praesent vel est tortor. Nunc commodo nec lectus ac interdum. Nunc tempor risus quis consequat consectetur. Donec quis ultrices felis. Maecenas consequat faucibus nulla, nec dapibus sapien semper ut.",
				"0006548768",
				"978-0006548768",
				8.63,
				4,
				([new Publisher(1, "Timothy") ]),
				([new Category(1, "Non-Fiction")]),
				([new Author(1, "John")])
			),
			new Book(2, 
				"Payback", 
				"https://books.google.com/books/content/images/frontcover/2VbVAAAAQBAJ?fife=w200-h300", 
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa tellus, sagittis et nulla in, molestie ullamcorper metus. In in lobortis dui, ac facilisis enim. Aenean eu ipsum eu lorem suscipit vehicula. Vestibulum a dolor enim. Praesent rhoncus erat auctor, porttitor odio quis, dignissim tortor. Sed euismod orci sodales, sodales lectus congue, vulputate ante. Cras congue blandit enim, tincidunt dapibus nulla ornare quis. Suspendisse pretium, augue eu luctus pulvinar, risus est imperdiet nisl, nec porta mauris magna at nulla. Praesent vel est tortor. Nunc commodo nec lectus ac interdum. Nunc tempor risus quis consequat consectetur. Donec quis ultrices felis. Maecenas consequat faucibus nulla, nec dapibus sapien semper ut.",
				"0007435067",
				"9780007435067",
				8.63,
				4,
				([new Publisher(1, "Timmy") ]),
				([new Category(1, "Fiction")]),
				([new Author(1, "Thomas")])
			)
		];
	}

	allBooks: Book[]=[];

	getAllBooks()
	{
		const promise = new Promise<Book[]>((resolve, reject) => {
			resolve(this.allBooks);
		});
		return promise;
	}
}