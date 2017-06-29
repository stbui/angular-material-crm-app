import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialComponentsModule } from './material.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentModule } from './component/component.module';
import { LeadsModule } from './leads/leads.module';
import { CustomersModule } from './customers/customers.module';

import { RoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    CustomizerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialComponentsModule,
    HeaderModule,
    SidenavModule,
    ComponentModule,
    DashboardModule,
    LeadsModule,
    CustomersModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
