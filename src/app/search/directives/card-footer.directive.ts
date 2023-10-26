import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCardFooter]',
})
export class CardFooterDirective implements OnInit {
  @Input() published!: string;

  dayNow: number;

  color = 'transparent';

  constructor(private ref: ElementRef<HTMLElement>) {
    this.dayNow = new Date('2019-10-30').getTime();
  }

  ngOnInit(): void {
    const below = (this.dayNow - new Date(this.published).getTime()) / 1000 / 3600 / 24;
    if (below < 7) {
      this.color = 'blue';
    } else if (below < 30) {
      this.color = 'green';
    } else if (below < 183) {
      this.color = 'yellow';
    } else {
      this.color = 'red';
    }
    this.ref.nativeElement.style.backgroundColor = this.color;
  }
}
