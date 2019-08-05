import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {


  @Output() logout = new EventEmitter<any>();

  message = new FormControl('');
  username = localStorage.getItem('username');
  ioConnection: any;
  messages: object[] = [];
  location: string = null;

  constructor(private service: ChatService) { }

  ngOnInit() {
    this.service.getIp().subscribe(data => console.log(data));
    this.service.initSocket();
    this.ioConnection = this.service.onMessage()
      .subscribe((message: object) => {
        this.messages.push(message);
      });
  }

  sendMessage() {
    this.service.sendMessage(this.username, this.message.value);
    this.message.reset();
  }

  logOff() {
    this.logout.emit();
  }
}
