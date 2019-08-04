import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json'
    })
  };

  api = 'https://chatby-api.herokuapp.com/user';

  login(credentials: object): Observable<object> {
    return this.http.get(this.api, {
      params: {
        username: credentials['username'],
        password: credentials['password']
      }
    });
  }

  register(credentials: object): Observable<object> {
    return this.http.post(this.api, credentials, this.httpOptions);
  }
}
