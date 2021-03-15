import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['employee.component.scss'],
  template: `
    <ngx-custom-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-custom-layout>
  `,
})
export class EmployeeComponent {

  menu = MENU_ITEMS;
}
