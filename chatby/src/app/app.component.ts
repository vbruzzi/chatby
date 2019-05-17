import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  title = 'chatby';
  loggedIn;
  username;

  updateStorage(event=null){ 
    console.log(event)
    this.loggedIn = localStorage.getItem("loggedIn");

    this.username = localStorage.getItem("username");
  }

  ngOnInit(): void {
    this.updateStorage();
  }
  deleteStorage() {
    localStorage.clear(); 
  }
}
