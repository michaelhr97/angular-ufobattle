import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { HttpService } from '../shared/services/http.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private conex: HttpService, private router: Router) {}

  arePasswordsEquals() {
    return this.password === this.confirmPassword;
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    if (!this.arePasswordsEquals()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords must be the same!',
      });
      return;
    }

    const user = new User(this.username, this.email, this.password);
    this.conex.register(user.username, user.email, user.password).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Registed successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigateByUrl('/login');
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }

  handleBlur() {
    if (this.username) {
      this.conex.checkUserExistsByUsername(this.username).subscribe(
        (response) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Username already exists!',
          });
        },
        (error) => {
          console.log('Username not exists');
        }
      );
    }
  }

  checkFormDataValid() {
    return !(
      this.username &&
      this.email &&
      this.password &&
      this.confirmPassword
    );
  }
}
