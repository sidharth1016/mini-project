import { Component } from '@angular/core';
import { SideBarComponent } from "../side-bar/side-bar.component";
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-rooms',
  imports: [SideBarComponent, CommonModule],
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class RoomsComponent {
    allRooms = [
  { sharing: '2 Sharing', cost: 7000, type: 'AC' },
  { sharing: '3 Sharing', cost: 6500, type: 'AC' },
  { sharing: '2 Sharing', cost: 5000, type: 'Non-AC' },
  { sharing: '3 Sharing', cost: 4500, type: 'Non-AC' },
];
  nonAcRooms = [
    { sharing: 'One-Sharing', cost: '9k' },
    { sharing: 'Two-Sharing', cost: '8k' },
    { sharing: 'Three-Sharing', cost: '6.5k' },
    { sharing: 'Four-Sharing', cost: '5.5k' }
  ];
enroll(sharing: string, type: string) {
  console.log('Room sharing:', sharing, 'Type:', type);
}
getCardStyle(isAC: boolean) {
  return {
    'background-color': isAC ? '#e8f4ff' : '#e8f4ff'
  };
}
}
