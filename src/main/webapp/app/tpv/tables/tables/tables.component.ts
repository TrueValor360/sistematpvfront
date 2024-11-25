import { Component } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'jhi-tables',
  standalone: true,
  imports: [TableComponent, ButtonModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent {}
