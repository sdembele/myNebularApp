import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { EmployeeComponent } from './employee.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { IndustriousComponent } from './industrious/industrious.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  {path: '', component:EmployeeComponent,
  children: [
    {path:'', component:IndustriousComponent},
    {path: 'list', component:ListEmployeeComponent},
    {path: 'form-layouts', component:FormLayoutsComponent},
    {path: 'buttons', component:ButtonsComponent},
    {path: 'datepicker', component:DatepickerComponent},
    {path: 'stepper', component:StepperComponent}
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
