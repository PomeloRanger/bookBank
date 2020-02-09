import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Login } from '../models/login';
import { AuthUser } from '../models/authUser';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient)
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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'rejectUnauthorized': 'false'
    })
  };

  Login(loginModel : Login) : Observable<any>
  {
    return this.http.post("https://localhost:5001/api/user/authenticate", JSON.stringify(loginModel), this.httpOptions);
  }

  Register(registerModel : Register) : Observable<any>
  {
    return this.http.post("https://localhost:44353/api/user/register", JSON.stringify(registerModel), this.httpOptions);
  }
}