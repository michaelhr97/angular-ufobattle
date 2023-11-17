import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  isError = false;

  constructor() {}

  handleSubmit(event: Event) {
    event.preventDefault();
  }
}