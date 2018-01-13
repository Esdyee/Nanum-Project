import { Directive, HostListener, EventEmitter, Input, Output } from '@angular/core';

export interface ScrollEvent {
  originalEvent: Event;
  isReachingBottom: boolean;
  isWindowEvent: boolean;
}

declare const window: Window;

@Directive({
  selector: '[appWindowScroll]'
})
export class WindowScrollDirective {
  @Output() public onScroll = new EventEmitter<ScrollEvent>();
  @Input() public bottomOffset: number;

  constructor() { }

  // handle window scroll
  @HostListener('window:scroll', ['$event']) public windowScrolled($event: Event) {
    this.windowScrollEvent($event);
  }

  protected windowScrollEvent($event: Event) {
    const target = <Document>$event.target;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const isReachingBottom = ( target.body.offsetHeight - (window.innerHeight + scrollTop) ) < this.bottomOffset;
    const emitValue: ScrollEvent = {isReachingBottom, originalEvent: $event, isWindowEvent: true};
    this.onScroll.emit(emitValue);
  }
}
