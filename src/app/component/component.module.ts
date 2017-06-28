import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialComponentsModule } from '../material.module';
import { RoutingModule } from './componebt-routing.module';
import { ComponentComponent } from './component.component';

import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalendarComponent } from './date-picker/calendar/calendar.component';
import { DayButtonComponent } from './date-picker/day-button/day-button.component';
import { DatePickerPipe } from './date-picker/date-picker.pipe';
import { ToolbarComponent } from './date-picker/toolbar/toolbar.component';
import { DateDisplayComponent } from './date-picker/date-display/date-display.component';
import { MonthComponent } from './date-picker/month/month.component';

import { AmapComponent } from './amap/amap.component';
// import { MarkdownComponent } from './markdown/markdown.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { PopoverDirective } from './popover/popover.directive';
import { SearchComponent } from './search/search.component';
import { DatatableComponent } from './datatable/datatable.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule,
    RoutingModule
  ],
  declarations: [
    DatePickerComponent,
    CalendarComponent,
    PaginationComponent,
    ComponentComponent,
    AmapComponent,
    // MarkdownComponent,
    DatePickerPipe,
    DayButtonComponent,
    ToolbarComponent,
    DateDisplayComponent,
    MonthComponent,
    PopoverComponent,
    PopoverDirective,
    SearchComponent,
    DatatableComponent
  ],
  exports: [
    DatePickerComponent,
    PaginationComponent,
    AmapComponent,
    // MarkdownComponent,
    PopoverComponent,
    PopoverDirective,
    SearchComponent,
    DatatableComponent
  ]
})
export class ComponentModule { }
