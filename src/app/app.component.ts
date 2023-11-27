import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkLoginState();
      }
    });
  }

  checkLoginState() {
    let token = sessionStorage.getItem('token');
    this.isLogged = token ? true : false;
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    window.location.reload();
  }
}
