import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  message = new FormControl('');
  username = localStorage.getItem("username");
  ioConnection: any;
  messages: Object[] = [];
  
  constructor(private service: ChatService) { }

  ngOnInit() {
    this.service.initSocket();
    this.ioConnection = this.service.onMessage()
      .subscribe((message) => {
        this.messages.push(message);
      });
  }

  sendMessage() {
    this.service.sendMessage(this.username, this.message.value);
  }

}
