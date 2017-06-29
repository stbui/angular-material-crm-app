import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routers:Routes = [

];

@NgModule({
  imports: [ RouterModule.forChild(routers) ],
  exports: [ RouterModule ],
  providers: []
})

export class RoutingModule {
}
