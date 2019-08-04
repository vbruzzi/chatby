import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

const API_URL = 'https://chatby-socket.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  private socket;

  public initSocket() {
    this.socket = io(API_URL);
  }

  public sendMessage(user, message) {
    this.socket.emit('message', {user, message});
  }

  onMessage() {
    return new Observable(observer => {
      this.socket.on('message', (data) => observer.next(data));
    });
  }

  getIp(): Observable<object> {
    return this.http.get('https://api.ipify.org?format=json');
  }

}
