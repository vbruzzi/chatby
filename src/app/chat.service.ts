import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

const API_URL: string = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket;

  public initSocket() {
    this.socket = io(API_URL);
  }

  public sendMessage(user, message) {
    this.socket.emit('message', {'user': user, 'message': message});
  }
  
  onMessage() {
    return new Observable(observer => {
      this.socket.on('message', (data) => observer.next(data))
    }); 
  }

  constructor() {
  }

}
