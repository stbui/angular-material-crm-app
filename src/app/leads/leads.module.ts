import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialComponentsModule } from '../material.module';
import { ComponentModule } from '../component/component.module';
import { LeadsRoutingModule} from './leads.routing';

import { LeadsComponent } from './leads.component';
import { LeadsService } from './leads.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    ComponentModule,
    LeadsRoutingModule
  ],
  declarations: [ LeadsComponent ],
  providers: [
    { provide: 'leadsService', useClass: LeadsService }
  ]
})
export class LeadsModule {
}
