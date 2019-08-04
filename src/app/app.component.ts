import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'chatby';
  loggedIn;
  username;

  updateStorage(event = null) {
    this.loggedIn = localStorage.getItem('loggedIn');
    this.username = localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.updateStorage();
  }

  deleteStorage() {
    localStorage.clear();
    this.loggedIn = false;
  }
}
