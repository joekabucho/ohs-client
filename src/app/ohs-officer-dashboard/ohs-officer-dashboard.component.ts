import { Component, OnInit} from '@angular/core';
import { JobcardService } from '../shared/jobcard.service';
import { WorkPermitService } from '../shared/work-permit.service';
import { InductionChecklistService } from '../shared/induction-checklist.service';
import { ToolboxTalkService } from '../shared/toolbox-talk.service';
import Glide from '@glidejs/glide';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {TemplateRef} from '@angular/core';
import { dev } from '../config/dev';
import {HttpClient} from '@angular/common/http';
import { IncidentService } from '../shared/incident.service';
@Component({
  selector: 'app-ohs-officer-dashboard',
  templateUrl: './ohs-officer-dashboard.component.html',
  styleUrls: ['./ohs-officer-dashboard.component.scss']
})
export class OhsOfficerDashboardComponent implements OnInit {

  focus;
  focus1;
  focus2;
  focus3;
  focus4;


  isCollapsed = true;

  user: String;
  users: any;
  profile: any;
  url = dev.connect;
  modalRef: BsModalRef;

  Jobcard: any = [];
  Workpermit: any = [];
  Inductionchecklist: any = [];
  Toolboxtalk: any = [];
  Incidents: any = [];

  // tslint:disable-next-line:max-line-length
  constructor(   public IncidentRestApi: IncidentService , public JobcardRestApi: JobcardService  , private modalService: BsModalService, private http: HttpClient, public WorkpermitRestApi: WorkPermitService, public InductionchecklistRestApi: InductionChecklistService, public ToolboxRestApi: ToolboxTalkService
  ) {
    this.getAllUsers();
    this.getUser();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.loadIncidents();
    this.loadWorkPermit();
    this.loadJobcards();
    this.loadInductionchecklists();
    this.loadToolboxTalk();
    new Glide('.presentation-cards', {
      type: 'carousel',
      startAt: 0,
      focusAt: 2,
      perTouch: 1,
      perView: 5
    }).mount();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');

  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-primary');
  }
  // Get employees list
  loadJobcards() {
    return this.JobcardRestApi.getJobcard().subscribe((data: {}) => {
      this.Jobcard = data;
    });
  }
  loadInductionchecklists() {
    return this.InductionchecklistRestApi.GetInductionChecklist().subscribe((data: {}) => {
      this.Inductionchecklist = data;
    });
  }
  loadToolboxTalk() {
    return this.ToolboxRestApi.GetToolboxTalk().subscribe((data: {}) => {
      this.Toolboxtalk = data;
    });
  }

  loadWorkPermit() {
    return this.WorkpermitRestApi.GetWorkPermit().subscribe((data: {}) => {
      this.Workpermit = data;
    });
  }
  // Get employees list
  loadIncidents() {
    return this.IncidentRestApi.GetIncidents().subscribe((data: {}) => {
      this.Incidents = data;
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
