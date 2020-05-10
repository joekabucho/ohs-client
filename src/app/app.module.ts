import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';
import { ChartsModule } from 'ng2-charts';

import { IndexComponent } from './index/index.component';
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
import { ErrorComponent } from './examples/error/error.component'
import { InvoicepageComponent } from './examples/invoicepage/invoicepage.component';
import { LoginpageComponent } from './examples/loginpage/loginpage.component';
import { PricingpageComponent } from './examples/pricingpage/pricingpage.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ResetpageComponent } from './examples/resetpage/resetpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PictureUploadComponent } from './components/picture-upload/picture-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {NotificationService} from '../app/shared/notification';
import { JobcardService } from '../app/shared/jobcard.service';
import { WorkPermitService } from '../app/shared/work-permit.service';
import { InductionChecklistService } from '../app/shared/induction-checklist.service';
import { ToolboxTalkService} from '../app/shared/toolbox-talk.service';
import { AddJobcardComponent } from './jobcard/add-jobcard/add-jobcard.component';
import { ListJobcardComponent } from './jobcard/list-jobcard/list-jobcard.component';
import { EditJobcardComponent } from './jobcard/edit-jobcard/edit-jobcard.component';
import { AddWorkpermitComponent } from './workpermit/add-workpermit/add-workpermit.component';
import { ListWorkpermitComponent } from './workpermit/list-workpermit/list-workpermit.component';
import { EditWorkpermitComponent } from './workpermit/edit-workpermit/edit-workpermit.component';
import { AddInductionchecklistComponent } from './inductionchecklist/add-inductionchecklist/add-inductionchecklist.component';
import { EditInductionchecklistComponent } from './inductionchecklist/edit-inductionchecklist/edit-inductionchecklist.component';
import { ListInductionchecklistComponent } from './inductionchecklist/list-inductionchecklist/list-inductionchecklist.component';
import { AddToolboxtalkComponent } from './toolboxtalk/add-toolboxtalk/add-toolboxtalk.component';
import { ListToolboxtalkComponent } from './toolboxtalk/list-toolboxtalk/list-toolboxtalk.component';
import { EditToolboxtalkComponent } from './toolboxtalk/edit-toolboxtalk/edit-toolboxtalk.component';
import { PmDashboardComponent } from './pm-dashboard/pm-dashboard.component';
import { OhsOfficerDashboardComponent } from './ohs-officer-dashboard/ohs-officer-dashboard.component';
import { ViewJobcardComponent } from './view-jobcard/view-jobcard.component';
import { ViewInductionComponent } from './view-induction/view-induction.component';
import { ViewWorkpermitsComponent } from './view-workpermits/view-workpermits.component';
import { NocDashboardComponent } from './noc-dashboard/noc-dashboard.component';
import { ViewToolboxComponent } from './view-toolbox/view-toolbox.component';
import {DataTablesModule} from 'angular-datatables';
import { AddJobanalysisComponent } from './job-analysis/add-jobanalysis/add-jobanalysis.component';
import { EditJobanalysisComponent } from './job-analysis/edit-jobanalysis/edit-jobanalysis.component';
import { ListJobanalysisComponent } from './job-analysis/list-jobanalysis/list-jobanalysis.component';
import { AddIncidentComponent } from './incident/add-incident/add-incident.component';
import { ListIncidentComponent } from './incident/list-incident/list-incident.component';
import { EditIncidentComponent } from './incident/edit-incident/edit-incident.component';
import { DashboardComponent } from './examples/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    SectionsComponent,
    AboutusComponent,
    Error500Component,
    AccountsettingsComponent,
    BlogpostComponent,
    BlogpostsComponent,
    ChatpageComponent,
    CheckoutpageComponent,
    ContactusComponent,
    EcommerceComponent,
    ErrorComponent,
    InvoicepageComponent,
    LoginpageComponent,
    PricingpageComponent,
    ProductpageComponent,
    ResetpageComponent,
    NavbarComponent,
    FooterComponent,
    PictureUploadComponent,
    AddJobcardComponent,
    ListJobcardComponent,
    EditJobcardComponent,
    AddWorkpermitComponent,
    ListWorkpermitComponent,
    EditWorkpermitComponent,
    AddInductionchecklistComponent,
    EditInductionchecklistComponent,
    ListInductionchecklistComponent,
    AddToolboxtalkComponent,
    ListToolboxtalkComponent,
    EditToolboxtalkComponent,
    PmDashboardComponent,
    OhsOfficerDashboardComponent,
    ViewJobcardComponent,
    ViewInductionComponent,
    ViewWorkpermitsComponent,
    NocDashboardComponent,
    ViewToolboxComponent,
    AddJobanalysisComponent,
    EditJobanalysisComponent,
    ListJobanalysisComponent,
    AddIncidentComponent,
    ListIncidentComponent,
    EditIncidentComponent,
    DashboardComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        //NotificationService,
        BsDropdownModule.forRoot(),
        ProgressbarModule.forRoot(),
        TooltipModule.forRoot(),
        TimepickerModule.forRoot(),
        PopoverModule.forRoot(),
        CollapseModule.forRoot(),
        TagInputModule,
        ChartsModule,
        PresentationModule,
        TabsModule.forRoot(),
        PaginationModule.forRoot(),
        AlertModule.forRoot(),
        BsDatepickerModule.forRoot(),
        CarouselModule.forRoot(),
        ModalModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 1000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        ReactiveFormsModule,
        DataTablesModule,
    ],
  providers: [ToolboxTalkService, InductionChecklistService, JobcardService, WorkPermitService],
  bootstrap: [AppComponent]
})
export class AppModule {}
