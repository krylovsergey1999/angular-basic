import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

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

  @HostBinding('style.color') elColor = null;

  constructor(private elRef: ElementRef, private r: Renderer2) {
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event) {
    //this.r.setStyle(this.elRef.nativeElement, 'color', this.color);
    this.elColor = this.color;
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event) {
    //this.r.setStyle(this.elRef.nativeElement, 'color', null);
    this.elColor = null;
  }
}
