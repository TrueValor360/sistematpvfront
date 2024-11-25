import { Component, inject } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { ButtonModule } from 'primeng/button';
import { Table } from '../interfaces/table.interface';
import { TablesService } from '../service/tables.service';
import { NgClass } from '@angular/common';
import { SelectedTableService } from '../service/selected-table.service';

@Component({
  selector: 'jhi-tables',
  standalone: true,
  imports: [TableComponent, ButtonModule, NgClass],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent {
  tablesService = inject(TablesService);
  selectedTableService = inject(SelectedTableService);

  selectedSection = this.tablesService.sections[0];

  cont: number = 2;

  chancheSection(index: number) {
    this.selectedSection = this.tablesService.sections[index];
  }

  addTable() {
    this.cont = this.cont + 1;

    this.selectedSection.tables!.push({
      name: 'T' + this.cont,
      state: 'Libre',
    });
  }

  selectTable(index: number) {
    console.log('click');

    this.selectedTableService.selectedTable = this.selectedSection.tables![index];
  }
}
