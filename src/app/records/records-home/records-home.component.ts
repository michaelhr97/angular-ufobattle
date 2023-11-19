import { Component } from '@angular/core';

@Component({
  selector: 'app-records-home',
  templateUrl: './records-home.component.html',
  styleUrls: ['./records-home.component.css'],
})
export class RecordsHomeComponent {
  data = [
    {
      username: 'user1',
      punctuation: 425,
      ufos: 3,
      disposedTime: 120,
      recordDate: 1544529600000,
    },
  ];
}
