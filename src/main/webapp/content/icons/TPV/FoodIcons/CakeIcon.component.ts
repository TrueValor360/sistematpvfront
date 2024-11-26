import { Component, Input } from '@angular/core';

@Component({
  selector: 'Cake-Icon',
  standalone: true,
  imports: [],
  template: `
    <svg class="w-[50px] h-[50px] fill-red-500" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146.26 103.41">
      <defs>
        <style>
          .cls-1 {
            fill: #1d1d1b;
            fill-rule: evenodd;
            stroke-width: 0px;
          }
        </style>
      </defs>
      <path
        d="M81.84,45.49c-.09-.09-.18-.13-.22-.22v-.04l-.45-.44c-.09-.09-.13-.18-.13-.18h0l-.58-.58c-2.4,2.36-4.72,3.42-6.94,3.29-1.96-.18-3.43-1.25-4.36-2.09h0l-.71-.67c-.13-.22-.27-.36-.27-.36h0l-.18-.18c-2.36,2.36-4.67,3.42-6.94,3.29-3.25-.31-5.69-2.89-5.69-2.89v-1.74h26.69c-.18.62-.22,1.29-.22,2v.8h0ZM82.41,48.07c-.89-.58-1.6-1.2-2.09-1.69-2.13,1.69-4.22,2.58-6.32,2.58h-.66c-2.45-.22-4.32-1.6-5.38-2.58-2.14,1.69-4.27,2.58-6.36,2.58h-.66c-2.63-.22-4.49-1.65-5.56-2.76v15.39h38.08v-6.94c-.35.09-.71.09-1.07.09-4.53,0-8.45-2.76-9.96-6.67h0ZM55.37,66.22h38.08v-3.29h-38.08v3.29Z"
      />
    </svg>
  `,
})
export class CakeIcon {
  @Input() classIcon: string = 'fill-red-500';
}
