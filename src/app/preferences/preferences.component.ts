import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})
export class PreferencesComponent {
  totalufo: number = 1;
  time: number = 60;

  constructor(private toastr: ToastrService) {}

  handleSubmit(event: Event) {
    event.preventDefault();

    sessionStorage.setItem('totalufo', this.totalufo.toString());
    sessionStorage.setItem('time', this.time.toString());

    this.toastr.success('Preferences saved!');
  }
}
