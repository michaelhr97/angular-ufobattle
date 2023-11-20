export class Missile {
  id: string;
  pid: any;
  height: number;
  horizontalPosition: number;
  verticalPosition: number;
  horizontalStep: number;
  verticalStep: number;
  element: HTMLElement;
  isLaunched: boolean;
  windowHorizontalLimit: number;
  windowVerticalLimit: number;

  constructor(id: string, pid: any) {
    this.id = id;
    this.pid = pid;
    this.height = 70;
    this.horizontalPosition = 300;
    this.verticalPosition = 0;
    this.horizontalStep = 5;
    this.verticalStep = 5;
    this.element = document.getElementById(id) as HTMLElement;
    this.isLaunched = false;

    this.windowHorizontalLimit = window.innerWidth;
    this.windowVerticalLimit = window.innerHeight;
  }

  getVerticalPosition() {
    return this.verticalPosition;
  }

  getHorizontalPosition() {
    return this.horizontalPosition;
  }

  move() {
    this.horizontalPosition = this.horizontalPosition + this.horizontalStep;
    this.element.style.left = `${this.horizontalPosition}px`;
  }

  launch() {
    if (this.verticalPosition < this.windowVerticalLimit) {
      this.verticalPosition = this.verticalPosition + this.verticalStep;
    } else {
      this.isLaunched = false;
      clearInterval(this.pid);
      this.verticalPosition = 0;
      this.element.style.bottom = `${this.verticalPosition}px`;
    }
  }
}
