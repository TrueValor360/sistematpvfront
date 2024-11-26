import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'tpv-table',
  standalone: true,
  imports: [CardModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() tableName!: string;
  state: string = 'w-fit h-fit text-white font-bold bg-blue-300';
}
