import {
  animate,
  animateChild,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

const moveToRight = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: -1,
      left: -1,
      width: '99%',
    }),
  ]),
  query(':enter', [style({ left: '99%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('299ms ease-out', style({ left: '-100%' }))]),
    query(':enter', [animate('299ms ease-out', style({ left: '0%' }))]),
  ]),
  query(':enter', animateChild()),
];

const moveToLeft = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: -1,
      left: -1,
      width: '99%',
    }),
  ]),
  query(':enter', [style({ left: '-101%' })]),
  query(':leave', animateChild()),
  group([
    query(':leave', [animate('299ms ease-out', style({ left: '100%' }))]),
    query(':enter', [animate('299ms ease-out', style({ left: '0%' }))]),
  ]),
  query(':enter', animateChild()),
];

// for future usage
const moveDown = [
  query(
    ':enter, :leave',
    style({
      backfaceVisibility: 'hidden',
      left: 0,
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      transformStyle: 'preserve-3d',
      width: '100%',
    }),
    { optional: true },
  ),
  group([
    query(
      ':enter',
      [
        style({ 'z-index': 9999 }),
        animate(
          '1s 0s ease',
          keyframes([
            style({
              offset: 0,
              transform: 'translateY(-100%)',
              'z-index': '9999',
            }),
            style({ transform: 'translateY(0%)', offset: 1 }),
          ]),
        ),
      ],
      { optional: true },
    ),
    query(
      ':leave',
      [
        animate(
          '.8s 0s ease-in-out',
          keyframes([
            style({ transform: 'translateY(0%)', offset: 0 }),
            style({ transform: 'translateY(100%)', opacity: '0', offset: 1 }),
          ]),
        ),
      ],
      { optional: true },
    ),
  ]),
];

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage => AboutUsPage', moveToRight),
  transition('HomePage => TeamPage', moveToRight),
  transition('HomePage => ContactPage', moveToRight),
  transition('AboutUsPage => TeamPage', moveToRight),
  transition('AboutUsPage => ContactPage', moveToRight),
  transition('TeamPage => AboutUsPage', moveToLeft),
  transition('TeamPage => ContactPage', moveToRight),
  transition('ContactPage => TeamPage', moveToLeft),
  transition('ContactPage => AboutUsPage', moveToLeft),
]);
