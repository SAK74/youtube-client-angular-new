import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

enum Colors {
  LAST = 'blue',
  NEW = 'green',
  OLD = 'yellow',
  OLDEST = 'red',
}

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
      this.color = Colors.LAST;
    } else if (below < 30) {
      this.color = Colors.NEW;
    } else if (below < 183) {
      this.color = Colors.OLD;
    } else {
      this.color = Colors.OLDEST;
    }
    this.ref.nativeElement.style.backgroundColor = this.color;
  }
}
