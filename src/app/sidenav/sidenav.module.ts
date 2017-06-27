import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialComponentsModule } from '../material.module';
import { RoutingModule } from './sidenav.routing';
import { SidenavComponent } from './sidenav.component';
import { ItemComponent } from './item/item.component';
import { SidenavService } from './sidenav.service';


import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from "angular2-perfect-scrollbar";
const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    RoutingModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
  ],
  declarations: [
    SidenavComponent,
    ItemComponent
  ],
  exports: [
    SidenavComponent
  ],
  providers: [
    {provide: 'sidenavService', useClass: SidenavService}
  ]
})
export class SidenavModule { }
