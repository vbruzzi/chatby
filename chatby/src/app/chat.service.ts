import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket = io('http://localhost:4200/');

  constructor() {}

}
