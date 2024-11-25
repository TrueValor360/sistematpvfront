import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RoutingItem } from '../interfaces/RoutingItem.interface';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'tpv-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SidebarModule],
  templateUrl: './tpv.component.html',
  styleUrl: './tpv.component.scss',
  providers: [],
})
export class TpvComponent {
  sidebarVisible: boolean = false;
  sidebarstyle: string = '';

  routingTpv: RoutingItem[] = [
    {
      title: 'Mesas',
      route: '/tpv/tables',
    },
    {
      title: 'Pedidos',
      route: '/orders',
    },
    {
      title: 'Autoservicio',
      route: '/autoservice',
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

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarstyle = 'relative w-full bg-gray-800 text-white';
  }
}
