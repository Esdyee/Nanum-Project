import { trigger, state, animate, style, transition } from '@angular/core';

export function modalTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('modalTransition', [
    // state('void', style({ position: 'fixed', width: '100%' })),
    // state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ]);
}