import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  isError = false;

  constructor() {}

  arePasswordsEquals() {
    return this.password === this.confirmPassword;
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.arePasswordsEquals()) {
      this.isError = true;
    }

    const user = new User(this.username, this.email, this.password);
    console.log(user);
  }
}
