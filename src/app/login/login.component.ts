import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  failedLogin = false;

  @Output() updateState = new EventEmitter();

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.loginForm.value).
      subscribe(data => {
        localStorage.setItem('loggedIn', '1');
        localStorage.setItem('username', data['stylizedUsername']);
        this.failedLogin = false;
        this.updateState.emit(null);
      },
        () => this.failedLogin = true);
  }

  register() {
    this.userService.register(this.loginForm.value)
      .subscribe(() =>  true, () => this.failedLogin = true);
  }
}
