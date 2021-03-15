import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { IndustriousComponent } from './industrious/industrious.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
  {path: '', component:EmployeeComponent,
  children: [
    {path:'', component:IndustriousComponent},
    {path: 'list', component:ListEmployeeComponent},
  {path: 'form-layouts', component:FormLayoutsComponent}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
