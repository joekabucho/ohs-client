import { Component, OnInit} from '@angular/core';
import { JobcardService } from '../shared/jobcard.service';
import Glide from '@glidejs/glide';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {TemplateRef} from '@angular/core';
import { dev } from '../config/dev';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pm-dashboard',
  templateUrl: './pm-dashboard.component.html',
  styleUrls: ['./pm-dashboard.component.scss']
})
export class PmDashboardComponent implements OnInit {

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

  constructor(    public JobcardRestApi: JobcardService  , private modalService: BsModalService, private http: HttpClient
  ) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.loadJobcards();
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




}
