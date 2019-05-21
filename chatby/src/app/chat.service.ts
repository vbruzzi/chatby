import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string) {
    this.socket.emit(msg);
  }

  getMessage() {
    return this.socket
      .fromEvent("message")
      .map(data => data.msg);
  }
}
