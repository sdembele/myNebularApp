import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbRadioModule,
  NbSelectModule,
  NbSidebarModule,
  NbSidebarService,
  NbUserModule,
} from '@nebular/theme';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ThemeModule } from '../theme/theme.module';
import { EmployeeComponent } from './employee.component';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { IndustriousComponent } from './industrious/industrious.component';

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

@NgModule({
  declarations: [
    ListEmployeeComponent, 
    FormLayoutsComponent, 
    ButtonsComponent,
    EmployeeComponent,
    IndustriousComponent],
  imports: [
    RouterModule,
    CommonModule,
    
    NbMenuModule,
    ThemeModule,
    NbSecurityModule,

    EmployeeRoutingModule,

    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,

    
    ngFormsModule,
  ],
  providers: [{
    provide: NbRoleProvider,
    useValue: {
      getRole: () => {
        // here we simply return a list of roles for current user
        return observableOf(['guest', 'user', 'editor']);
      },
    },
  },]
})
export class EmployeeModule { }


