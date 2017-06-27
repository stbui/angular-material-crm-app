import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialComponentsModule } from './material.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { CustomizerComponent } from './customizer/customizer.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    CustomizerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    HeaderModule,
    SidenavModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
