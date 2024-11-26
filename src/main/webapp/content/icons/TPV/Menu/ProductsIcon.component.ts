import { Component, Input } from '@angular/core';

@Component({
  selector: 'Products-Icon',
  standalone: true,
  imports: [],
  template: `
    <svg [class]="classIcon" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.89 183.21">
      <defs>
        <style>
          .cls-1 {
            fill: #575756;
            stroke-width: 0px;
          }
        </style>
      </defs>
      <path
        d="M140.05,144.45H21.88c-1.44,0-2.67-1.23-2.67-2.67v-76.86c0-1.44,1.23-2.67,2.67-2.67h118.17c1.44,0,2.67,1.23,2.67,2.67v77.07c-.21,1.23-1.44,2.46-2.67,2.46ZM24.34,139.32h113.04v-71.93H24.34v71.93Z"
      />
      <path d="M136.87,88.14H24.88c-2.33,0-4.32-1.23-4.32-2.67s2-2.67,4.32-2.67h111.99c2.33,0,4.32,1.23,4.32,2.67s-2,2.67-4.32,2.67Z" />
      <path
        d="M136.27,77.46H24.84c-2.31,0-4.29-1.23-4.29-2.67s1.98-2.67,4.29-2.67h111.43c2.31,0,4.29,1.23,4.29,2.67-.33,1.44-2.31,2.67-4.29,2.67Z"
      />
    </svg>
  `,
})
export class ProductsIcon {
  @Input() classIcon: string = '';
}
