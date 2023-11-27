import { Component } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  token = '';

  constructor(private conex: HttpService, private router: Router) {}

  handleSubmit(event: Event) {
    event.preventDefault();

    this.conex.login(this.username, this.password).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Logged successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.token = response.split(' ')[1];
          sessionStorage.setItem('token', this.token);
          sessionStorage.setItem('username', this.username);
          this.router.navigateByUrl('/');
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

  checkFormDataValid() {
    return !(this.username && this.password);
  }
}
