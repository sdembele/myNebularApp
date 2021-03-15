import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';
import { NumberWithCommasPipe } from './number-with-commas.pipe';
import { PluralPipe } from './plural.pipe';
import { RoundPipe } from './round.pipe';
import { TimingPipe } from './timing.pipe';



@NgModule({
  declarations: [CapitalizePipe, NumberWithCommasPipe, PluralPipe, RoundPipe, TimingPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
