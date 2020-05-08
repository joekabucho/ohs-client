import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SectionsComponent } from './sections/sections.component';
import { ProfilepageComponent } from './examples/profilepage/profilepage.component';
import { RegisterpageComponent } from './examples/registerpage/registerpage.component';
import { LandingpageComponent } from './examples/landingpage/landingpage.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { Error500Component } from './examples/500error/500error.component';
import { AccountsettingsComponent } from './examples/accountsettings/accountsettings.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ChatpageComponent } from './examples/chatpage/chatpage.component';
import { CheckoutpageComponent } from './examples/checkoutpage/checkoutpage.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { DashboardComponent } from './examples/dashboard/dashboard.component';
import { ErrorComponent } from './examples/error/error.component';
import { InvoicepageComponent } from './examples/invoicepage/invoicepage.component';
import { LoginpageComponent } from './examples/loginpage/loginpage.component';
import { PricingpageComponent } from './examples/pricingpage/pricingpage.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ResetpageComponent } from './examples/resetpage/resetpage.component';
import {AddJobcardComponent} from './jobcard/add-jobcard/add-jobcard.component';
import {ListJobcardComponent} from './jobcard/list-jobcard/list-jobcard.component';
import {EditJobcardComponent} from './jobcard/edit-jobcard/edit-jobcard.component';
import {AddWorkpermitComponent} from './workpermit/add-workpermit/add-workpermit.component';
import {EditWorkpermitComponent} from './workpermit/edit-workpermit/edit-workpermit.component';
import {ListWorkpermitComponent} from './workpermit/list-workpermit/list-workpermit.component';
import {AddInductionchecklistComponent} from './inductionchecklist/add-inductionchecklist/add-inductionchecklist.component';
import {EditInductionchecklistComponent} from './inductionchecklist/edit-inductionchecklist/edit-inductionchecklist.component';
import {ListInductionchecklistComponent} from './inductionchecklist/list-inductionchecklist/list-inductionchecklist.component';
import {AddToolboxtalkComponent} from './toolboxtalk/add-toolboxtalk/add-toolboxtalk.component';
import {EditToolboxtalkComponent} from './toolboxtalk/edit-toolboxtalk/edit-toolboxtalk.component';
import {ListToolboxtalkComponent} from './toolboxtalk/list-toolboxtalk/list-toolboxtalk.component';
import {PmDashboardComponent} from './pm-dashboard/pm-dashboard.component';
import {OhsOfficerDashboardComponent} from './ohs-officer-dashboard/ohs-officer-dashboard.component';
import {ViewJobcardComponent} from './view-jobcard/view-jobcard.component';
import {ViewInductionComponent} from './view-induction/view-induction.component';
import {ViewToolboxComponent} from './view-toolbox/view-toolbox.component';
import {ViewWorkpermitsComponent} from './view-workpermits/view-workpermits.component';
import {NocDashboardComponent} from './noc-dashboard/noc-dashboard.component';
import {AddIncidentComponent} from './incident/add-incident/add-incident.component';
import {EditIncidentComponent} from './incident/edit-incident/edit-incident.component';
import {ListIncidentComponent} from './incident/list-incident/list-incident.component';
import {AddJobanalysisComponent} from './job-analysis/add-jobanalysis/add-jobanalysis.component';
import {ListJobanalysisComponent} from './job-analysis/list-jobanalysis/list-jobanalysis.component';
import {EditJobanalysisComponent} from './job-analysis/edit-jobanalysis/edit-jobanalysis.component';
const routes: Routes = [
  { path: '', redirectTo: '/register-page', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile-page', component: ProfilepageComponent },
  { path: 'register-page', component: RegisterpageComponent },
  { path: 'landing-page', component: LandingpageComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: '500-error', component: Error500Component },
  { path: 'account-settings', component: AccountsettingsComponent },
  { path: 'blog-post', component: BlogpostComponent },
  { path: 'blog-posts', component: BlogpostsComponent },
  { path: 'chat-page', component: ChatpageComponent },
  { path: 'checkout-page', component: CheckoutpageComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'invoice-page', component: InvoicepageComponent },
  { path: 'login-page', component: LoginpageComponent },
  { path: 'pricing-page', component: PricingpageComponent },
  { path: 'product-page', component: ProductpageComponent },
  { path: 'reset-page', component: ResetpageComponent },
  { path: 'add-toolbox-talk', component: AddToolboxtalkComponent },
  { path: 'edit-toolbox-talk', component: EditToolboxtalkComponent },
  { path: 'list-toolbox-talk', component: ListToolboxtalkComponent },
  { path: 'add-induction-checklist', component: AddInductionchecklistComponent },
  { path: 'edit-induction-checklist', component: EditInductionchecklistComponent },
  { path: 'list-induction-checklist', component: ListInductionchecklistComponent },
  { path: 'add-workpermit', component: AddWorkpermitComponent },
  { path: 'edit-workpermit', component: EditWorkpermitComponent },
  { path: 'list-workpermit', component: ListWorkpermitComponent },
  { path: 'add-jobcard', component: AddJobcardComponent },
  { path: 'edit-jobcard', component: EditJobcardComponent },
  { path: 'list-jobcard', component: ListJobcardComponent },
  { path: 'pm-dashboard', component: PmDashboardComponent },
  { path: 'ohs-dashboard', component: OhsOfficerDashboardComponent },
  { path: 'view-jobcard', component: ViewJobcardComponent },
  { path: 'view-induction', component: ViewInductionComponent },
  { path: 'view-toolbox', component: ViewToolboxComponent },
  { path: 'noc-dashboard', component: NocDashboardComponent },
  { path: 'view-workpermit', component: ViewWorkpermitsComponent },
  { path: 'add-jobanalysis', component: AddJobanalysisComponent },
  { path: 'add-incident', component: AddIncidentComponent },
  { path: 'list-jobanalysis', component: ListJobanalysisComponent },
  { path: 'list-incident', component:  ListIncidentComponent},
  { path: 'edit-jobanalysis\'', component:  EditJobanalysisComponent},
  { path: 'list-incident', component:  EditIncidentComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
