import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";

import { DashboardComponent } from './dashboard.component';
import { MaterialComponentsModule } from '../material.module';
import { BriefingComponent } from './briefing/briefing.component';
import { ApproveComponent } from './approve/approve.component';
import { GoalComponent } from './goal/goal.component';
import { RankComponent } from './rank/rank.component';
import { FunnelComponent } from './funnel/funnel.component';
import { RemindComponent } from './remind/remind.component';
import { AssistantComponent } from './assistant/assistant.component';
import { BoardComponent } from './board/board.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialComponentsModule
  ],
  exports:[
    DashboardComponent
  ],
  declarations: [ DashboardComponent, BriefingComponent, ApproveComponent, GoalComponent, RankComponent, FunnelComponent, RemindComponent, AssistantComponent, BoardComponent, ReportComponent ]
})
export class DashboardModule {
}
