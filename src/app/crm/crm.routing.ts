import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrmComponent } from './crm.component';
import { LeadComponent } from './lead/lead.component';
import { CustomerComponent } from './customer/customer.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerCommonComponent } from './customer-common/customer-common.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ContractComponent } from './contract/contract.component';
import { ProductComponent } from './product/product.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CrmComponent },
      { path: 'dashboard', component: CrmComponent },
      { path: 'lead', component: LeadComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'contacts', component: ContactComponent },
      { path: 'customer', component: CustomerCommonComponent },
      { path: 'opportunities', component: OpportunitiesComponent },
      { path: 'contract', component: ContractComponent },
      { path: 'product', component: ProductComponent },
      { path: 'received', component: ProductComponent },
      { path: 'follow', component: ProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule {}
