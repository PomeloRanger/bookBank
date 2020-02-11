import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { tap, catchError } from 'rxjs/operators';
import { Register } from '../models/register';
import { Storage } from '@ionic/storage';
import { AuthUser } from '../models/authUser';

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseAPIUrl = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage, private platform: Platform,) 
  {
  }

  login(loginModel : Login) : Observable<AuthUser>
  {
    return this.http.post<AuthUser>(`${this.baseAPIUrl}/api/user/authenticate`, loginModel)
      .pipe(
        tap(res => {
          this.storage.set(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          throw new Error(e);
        })
      )
  }

  logout()
  {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  register(registerModel : Register) : Observable<any>
  {
    return this.http.post("https://localhost:5001/api/user/register", registerModel);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
