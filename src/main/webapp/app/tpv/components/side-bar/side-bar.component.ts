import { Component, inject } from '@angular/core';
import { SelectedTableService } from 'app/tpv/tables/service/selected-table.service';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'tpv-side-bar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  selectedTableService = inject(SelectedTableService);

  sidebarVisible: boolean = true;
  sidebarstyle: string = 'relative w-full bg-gray-800 text-white min-w-80';

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarstyle = 'relative w-full bg-gray-800 text-white';
  }
}
