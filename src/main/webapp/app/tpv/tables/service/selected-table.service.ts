import { Injectable } from '@angular/core';
import { Table } from '../interfaces/table.interface';

@Injectable({
  providedIn: 'root',
})
export class SelectedTableService {
  selectedTable?: Table;

  constructor() {}
}
