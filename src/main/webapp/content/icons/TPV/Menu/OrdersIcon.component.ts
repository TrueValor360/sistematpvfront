import { Component, Input } from '@angular/core';

@Component({
  selector: 'Orders-Icon',
  standalone: true,
  imports: [],
  template: `
    <svg [class]="classIcon" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.81 183.21">
      <defs>
        <style>
          .cls-1 {
            fill: #575756;
            stroke-width: 0px;
          }
        </style>
      </defs>
      <path
        d="M177.92,164.23h-58.03c-15.53,0-28.16-17.07-28.16-38.05V55.87c0-20.98,12.63-38.05,28.16-38.05h58.03c15.53,0,28.16,17.07,28.16,38.05v70.31c0,20.98-12.63,38.05-28.16,38.05ZM119.89,34.35c-8.78,0-15.93,9.66-15.93,21.52v70.31c0,11.87,7.14,21.52,15.93,21.52h58.03c8.78,0,15.93-9.65,15.93-21.52V55.87c0-11.87-7.14-21.52-15.93-21.52h-58.03Z"
      />
      <rect x="122.94" y="54.35" width="54.01" height="4" />
      <rect x="122.94" y="67.33" width="54.01" height="4" />
      <rect x="122.94" y="80.99" width="54.01" height="4" />
      <rect x="122.94" y="93.97" width="54.01" height="4" />
      <rect x="122.94" y="106.95" width="54.01" height="4" />
      <rect x="122.94" y="119.94" width="54.01" height="4" />
    </svg>
  `,
})
export class OrdersIcon {
  @Input() classIcon: string = '';
}
