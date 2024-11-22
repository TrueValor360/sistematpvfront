import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoutingItem } from '../interfaces/RoutingItem.interface';

@Component({
  selector: 'tpv-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tpv.component.html',
  styleUrl: './tpv.component.scss',
  providers: [],
})
export class TpvComponent {
  routingTpv: RoutingItem[] = [
    {
      title: 'Mesas',
      route: '/tables',
    },
    {
      title: 'Pedidos',
      route: '/tables',
    },
    {
      title: 'Autoservicio',
      route: '/tables',
    },
    {
      title: 'Productos',
      route: '/tables',
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
