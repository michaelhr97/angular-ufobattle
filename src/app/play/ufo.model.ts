export class Ufo {
  id: string;
  pid: any;
  horizontalPosition: number;
  horizontalStep: number;
  element: any;
  width: number;
  windowHorizontalLimit: number;

  constructor(id: string) {
    this.id = id;
    this.element = document.getElementById(id) as HTMLElement;
    this.horizontalPosition = Number.parseInt(this.element.style.left);
    this.horizontalStep = 5;
    this.width = Number.parseInt(this.element.style.width);
    this.windowHorizontalLimit = window.innerWidth;
  }

  move() {
    if (
      this.horizontalPosition + this.width + 8 > this.windowHorizontalLimit ||
      this.horizontalPosition < 8
    ) {
      this.horizontalStep = -this.horizontalStep;
    }

    this.horizontalPosition = this.horizontalPosition + this.horizontalStep;
    this.element.style.left = `${this.horizontalPosition}px`;
  }
}
