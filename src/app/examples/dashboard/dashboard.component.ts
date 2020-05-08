import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { dev } from '../../config/dev';
import { JobcardService } from '../../shared/jobcard.service';
import { IncidentService } from '../../shared/incident.service';
import { InductionChecklistService } from '../../shared/induction-checklist.service';
import { JobAnalysisService } from '../../shared/job-analysis.service';
import { WorkPermitService } from '../../shared/work-permit.service';
import { ToolboxTalkService } from '../../shared/toolbox-talk.service';
import { DetectionService } from '../../shared/detection.service';
import {HttpClient} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(
    private jobcardService: JobcardService,
    private jobAnalysisService: JobAnalysisService,
    private incidentService: IncidentService,
    private detectionService: DetectionService,
    private inductionChecklistService: InductionChecklistService,
    private workPermitService: WorkPermitService,
    private toolboxTalkService: ToolboxTalkService,
    private http: HttpClient
  ) {
    this.getAllUsers();
    this.getUser();
  }

  radioModel = 'Month';

  focus;
  focus1;
  focus2;
  focus3;
  focus4;

  dtOptions: DataTables.Settings = {};
  isCollapsed = true;

  // tslint:disable-next-line: ban-types
  user: String;
  users: any;
  profile: any;
  url = dev.connect;


  Jobanalysis: any = [];
  Jobcard: any = [];
  Incidents: any = [];
  Detection: any = [];
  Workpermit: any = [];
  Inductionchecklist: any = [];
  Toolboxtalk: any = [];


  ngOnInit() {
    this.loadJobanalysis();
    this.loadDetection();
    this.loadIncident();
    this.loadInductionChecklist();
    this.loadJobcard();
    this.loadToolboxtalkks();
    this.loadWorkpermit();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
      // generate random values for mainChart
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-primary');
  }
  // Get employees list
  loadJobanalysis() {
    return this.jobAnalysisService.GetJobAnalysiss().subscribe((data: {}) => {
      this.Jobanalysis = data;
    });
  }
  loadJobcard() {
    return this.jobcardService.getJobcard().subscribe((data: {}) => {
      this.Jobanalysis = data;
    });
  }
  loadIncident() {
    return this.incidentService.GetIncidents().subscribe((data: {}) => {
      this.Jobanalysis = data;
    });
  }
  loadInductionChecklist() {
    return this.inductionChecklistService.GetInductionChecklist().subscribe((data: {}) => {
      this.Jobanalysis = data;
    });
  }
  loadDetection() {
    return this.detectionService.GetDetections().subscribe((data: {}) => {
      this.Jobanalysis = data;
    });
  }
  loadWorkpermit() {
    return this.workPermitService.GetWorkPermit().subscribe((data: {}) => {
      this.Jobanalysis = data;
    });
  }
  loadToolboxtalkks() {
    return this.toolboxTalkService.GetToolboxTalk().subscribe((data: {}) => {
      this.Jobanalysis = data;
    });
  }
  getAllUsers() {
    this.http.get(this.url + '/api/user/getAll').subscribe((data) => {
      this.users = data;
    });
  }
  getUser() {
    this.profile = localStorage.getItem('profile');
  }


}
