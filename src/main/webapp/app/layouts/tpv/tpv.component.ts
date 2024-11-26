import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RoutingItem } from '../interfaces/RoutingItem.interface';
import { SideBarComponent } from 'app/tpv/components/side-bar/side-bar.component';

@Component({
  selector: 'tpv-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SideBarComponent],
  templateUrl: './tpv.component.html',
  styleUrl: './tpv.component.scss',
  providers: [],
})
export class TpvComponent {
  routingTpv: RoutingItem[] = [
    {
      title: 'Mesas',
      route: '/tpv/tables',
    },
    {
      title: 'Pedidos',
      route: '/tables',
    },
    {
      title: 'Autoservicio',
      route: '/autoservice',
    },
    {
      title: 'Productos',
      route: '/tpv/products',
    },
    {
      title: 'Turnos',
      route: '/tables',
    },
    {
      title: 'Caja',
      route: '/tables',
    },
    {
      title: 'Ajustes',
      route: '/tables',
    },
  ];
}
