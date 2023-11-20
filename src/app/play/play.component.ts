import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Ufo } from './ufo.model';
import Swal from 'sweetalert2';
import { Missile } from './missile.model';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  pid: any;
  time: any;
  score: any;
  numberUfos: any;
  listUfos: any;
  missile: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.score = 0;

    const storedTime = sessionStorage.getItem('time');
    this.time = storedTime ? Number.parseInt(storedTime) : 60;

    const storedNumberUfos = sessionStorage.getItem('numberUfos');
    this.numberUfos = storedNumberUfos ? Number.parseInt(storedNumberUfos) : 5;
    this.listUfos = [];

    this.pid = setInterval(() => this.updateTimer(), 1000);

    this.createUfos();
    this.launchUfos();
    this.missile = new Missile('missile', 0);
  }

  createUfoElement(name: string) {
    let ufoImage = this.renderer.createElement('img');
    this.renderer.setAttribute(ufoImage, 'id', name);
    this.renderer.setAttribute(ufoImage, 'class', 'ufo');
    this.renderer.setAttribute(ufoImage, 'src', 'assets/images/ufo.png');

    this.renderer.setStyle(ufoImage, 'width', '70px');
    this.renderer.setStyle(ufoImage, 'height', '70px');
    let horizontalLimit = window.innerWidth - 70;
    let verticalLimit = window.innerHeight - 70;
    let ufoHorizontalPosition = Math.floor(Math.random() * horizontalLimit);
    let ufoVerticalPosition = Math.floor(Math.random() * verticalLimit);
    this.renderer.setStyle(ufoImage, 'left', `${ufoHorizontalPosition}px`);
    this.renderer.setStyle(ufoImage, 'bottom', `${ufoVerticalPosition}px`);

    this.renderer.appendChild(this.el.nativeElement, ufoImage);
  }

  createUfos() {
    for (let i = 0; i < this.numberUfos; i++) {
      this.createUfoElement(`UFO-${i + 1}`);
      let ufo = new Ufo(`UFO-${i + 1}`);
      this.listUfos.push(ufo);
    }

    for (let i = 0; i < this.numberUfos; i++) {}
  }

  launchUfos() {
    for (let i = 0; i < this.numberUfos; i++) {
      this.listUfos[i].pid = setInterval(() => {
        this.listUfos[i].move();
      }, 25);
    }
  }

  updateTimer() {
    if (this.time > 0) {
      this.time--;
      return;
    }

    clearInterval(this.pid);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
