import { Routes } from '@angular/router';
import { TpvComponent } from 'app/layouts/tpv/tpv.component';
import { TablesComponent } from './tables/pages/tables/tables.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';

const tpvRoutes: Routes = [
  {
    path: '',
    component: TpvComponent,
    children: [
      { path: 'tables', component: TablesComponent },
      { path: 'products', component: ProductsPageComponent },
    ],
  },
];

export default tpvRoutes;
