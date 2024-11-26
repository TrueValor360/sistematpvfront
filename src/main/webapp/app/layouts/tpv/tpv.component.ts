import { Component, inject, Injector } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RoutingItem } from '../interfaces/RoutingItem.interface';
import { SideBarComponent } from 'app/tpv/components/side-bar/side-bar.component';
import { SettingsIcon } from 'content/icons/TPV/Menu/SettingsIcon.component';
import { NgComponentOutlet } from '@angular/common';
import { TablesIcon } from 'content/icons/TPV/Menu/TablesIcon.component';
import { OrdersIcon } from 'content/icons/TPV/Menu/OrdersIcon.component';
import { AutoserviceIcon } from 'content/icons/TPV/Menu/AutoserviceIcon.component';
import { ProductsIcon } from 'content/icons/TPV/Menu/ProductsIcon.component';
import { ClockeIcon } from 'content/icons/TPV/Menu/ClockIcon.component';
import { OpenIcon } from 'content/icons/TPV/Menu/OpenIcon.component';

@Component({
  selector: 'tpv-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SideBarComponent, SettingsIcon, NgComponentOutlet],
  templateUrl: './tpv.component.html',
  styleUrl: './tpv.component.scss',
  providers: [],
})
export class TpvComponent {
  injector = inject(Injector);

  iconClass = {
    classIcon: 'w-[25px] h-[25px]',
  };

  routingTpv: RoutingItem[] = [
    {
      title: 'Mesas',
      route: '/tpv/tables',
      iconComponent: TablesIcon,
    },
    {
      title: 'Pedidos',
      route: '/tables',
      iconComponent: OrdersIcon,
    },
    {
      title: 'Autoservicio',
      route: '/autoservice',
      iconComponent: AutoserviceIcon,
    },
    {
      title: 'Productos',
      route: '/tpv/products',
      iconComponent: ProductsIcon,
    },
    {
      title: 'Turnos',
      route: '/tables',
      iconComponent: ClockeIcon,
    },
    {
      title: 'Caja',
      route: '/tables',
      iconComponent: OpenIcon,
    },
    {
      title: 'Ajustes',
      route: '/tables',
      iconComponent: SettingsIcon,
    },
  ];

  createInjector(classes: string) {
    return Injector.create({
      providers: [
        {
          provide: 'classIcon',
          useValue: classes,
        },
      ],
      parent: this.injector,
    });
  }
}
