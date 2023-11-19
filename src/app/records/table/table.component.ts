import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any = [];
  headers = [
    {
      key: 'username',
      label: 'Username',
    },
    {
      key: 'punctuation',
      label: 'Punctuation',
    },
    {
      key: 'ufos',
      label: 'UFOs',
    },
    {
      key: 'disposedTime',
      label: 'Time',
    },
    {
      key: 'recordDate',
      label: 'Date',
    },
  ];
}
