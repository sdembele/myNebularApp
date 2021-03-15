import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    TinyMCEComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
