import { Type } from '@angular/core';

export interface RoutingItem {
  title: string;
  route: string;
  iconComponent?: Type<any>;
}
