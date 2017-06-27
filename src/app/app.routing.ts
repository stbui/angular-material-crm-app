import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routers:Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routers, { useHash: true }) ],
  exports: [ RouterModule ],
  providers: []
})

export class RoutingModule {
}
