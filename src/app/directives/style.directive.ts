import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() fontWeight = 'normal';
  @Input() dStyles: {
    border?: string,
    borderRadius?: string
  };

  constructor(private elRef: ElementRef, private r: Renderer2) {
    //this.r.setStyle(this.elRef.nativeElement, 'color', 'blue');

    // тоже работает, но лучше так не делать
    //elRef.nativeElement.style.color = 'red';
  }

  // в скобках пишем название события, которое мы хотим слушать
  // можно так: @HostListener('click', ['$event']) onClick(event: Event)
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {
    this.r.setStyle(this.elRef.nativeElement, 'color', this.color);
    this.r.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight);
    this.r.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
    this.r.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event) {
    this.r.setStyle(this.elRef.nativeElement, 'color', null);
    this.r.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    this.r.setStyle(this.elRef.nativeElement, 'border', null);
    this.r.setStyle(this.elRef.nativeElement, 'borderRadius', null);
  }
}
