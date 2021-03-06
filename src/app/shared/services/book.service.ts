import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Publisher } from '../models/publisher';
import { Category } from '../models/category';
import { Author } from '../models/author';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BookService {
	constructor(private http : HttpClient) 
	{
	}

	private baseAPIUrl = environment.url;

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
		  // A client-side or network error occurred. Handle it accordingly.
		  console.error('An error occurred:', error.error.message);
		} else {
		  // The backend returned an unsuccessful response code.
		  // The response body may contain clues as to what went wrong,
		  console.error(
			`Backend returned code ${error.status}, ` +
			`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
		  'Something bad happened; please try again later.');
	};

	getAllBooks() : Observable<Book[]>
	{
		return this.http.get<Book[]>(`${this.baseAPIUrl}/api/book`).pipe(catchError(this.handleError));
	}

	getBooksById(searchId : number) : Observable<Book>
	{
		return this.http.get<Book>(`${this.baseAPIUrl}/api/book/${searchId}`).pipe(catchError(this.handleError));
	}
}