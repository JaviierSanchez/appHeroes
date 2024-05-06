import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroes-layout',
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];
}
