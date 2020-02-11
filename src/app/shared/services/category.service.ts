import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Category } from '../models/category';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseAPIUrl = environment.url;
  
	constructor(private http : HttpClient) 
	{
	}
  
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

  	getAllCategory() : Observable<Category[]>
	{
		return this.http.get<Category[]>(`${this.baseAPIUrl}/api/category`).pipe(catchError(this.handleError));
	}

	getBooksByCategory(id : Number) : Observable<Book[]>
	{
		return this.http.get<Book[]>(`${this.baseAPIUrl}/api/category/${id}`).pipe(catchError(this.handleError));
	}
}
