import { Routes } from '@angular/router';
import { TpvComponent } from 'app/layouts/tpv/tpv.component';
import { TablesComponent } from './tables/tables/tables.component';

const tpvRoutes: Routes = [
  {
    path: '',
    component: TpvComponent,
    children: [{ path: '', component: TablesComponent }],
  },
];

export default tpvRoutes;
