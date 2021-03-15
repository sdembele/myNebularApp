import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumnLayoutComponent } from './one-column/one-column.component';
import { ThreeColumnsLayoutComponent } from './three-columns/three-columns.component';
import { TwoColumnsLayoutComponent } from './two-columns/two-columns.component';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';



@NgModule({
  declarations: [OneColumnLayoutComponent, TwoColumnsLayoutComponent, ThreeColumnsLayoutComponent, CustomLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
