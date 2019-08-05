import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private userService: UserService,
              private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.open('You have entered an invalid username or password', null, { duration: 3000 });
  }

  login() {
    this.userService.login(this.loginForm.value).
      subscribe(data => {
        localStorage.setItem('loggedIn', '1');
        localStorage.setItem('username', data['stylizedUsername']);
        this.failedLogin = false;
        this.updateState.emit(null);
      },
        () => this.openSnackBar());
  }

  register() {
    this.userService.register(this.loginForm.value)
      .subscribe(() =>  true, () => this.failedLogin = true);
  }
}
