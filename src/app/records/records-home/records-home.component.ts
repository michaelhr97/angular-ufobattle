import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/shared/models/record.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-records-home',
  templateUrl: './records-home.component.html',
  styleUrls: ['./records-home.component.css'],
})
export class RecordsHomeComponent implements OnInit {
  isLogged: boolean;
  recordsList: Record[];
  userRecordsList: Record[];
  username: string;
  token: string;

  constructor(private conex: HttpService) {
    this.isLogged = false;
    this.recordsList = [];
    this.userRecordsList = [];
    this.username = '';
    this.token = '';
  }
  ngOnInit(): void {
    this.token = sessionStorage.getItem('token') || '';

    if (this.token) {
      this.isLogged = true;
      this.username = sessionStorage.getItem('username') || '';
    }

    this.conex
      .getRecordsList()
      .subscribe((response) => (this.recordsList = response.body));

    if (this.isLogged) {
      this.conex
        .getRecordsListByUsername(this.username, this.token)
        .subscribe((response) => (this.userRecordsList = response.body));
    }
  }
}
