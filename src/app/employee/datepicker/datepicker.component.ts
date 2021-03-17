import { Component, OnInit } from '@angular/core';
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'ngx-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  min: Date;
  max: Date;

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

  ngOnInit(): void {
  }

}
