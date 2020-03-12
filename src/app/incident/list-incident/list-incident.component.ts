import {Component, NgModule, OnInit} from '@angular/core';
import { IncidentService } from '../../shared/incident.service';
import Glide from '@glidejs/glide';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {TemplateRef} from '@angular/core';
import { dev } from '../../config/dev';
import {HttpClient} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../../app.component';


@Component({
  selector: 'app-list-incident',
  templateUrl: './list-incident.component.html',
  styleUrls: ['./list-incident.component.scss']
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    DataTablesModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class ListIncidentComponent implements OnInit {

  focus;
  focus1;
  focus2;
  focus3;
  focus4;

  dtOptions: DataTables.Settings = {};
  isCollapsed = true;

  user: String;
  users: any;
  profile: any;
  url = dev.connect;
  modalRef: BsModalRef;

  Incidents: any = [];

  constructor(    public IncidentRestApi: IncidentService  , private modalService: BsModalService, private http: HttpClient
  ) {
    this.getAllUsers();
    this.getUser();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.loadIncidents();
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
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-primary');
  }
  // Get employees list
  loadIncidents() {
    return this.IncidentRestApi.GetIncidents().subscribe((data: {}) => {
      this.Incidents = data;
    });
  }


  // Delete employee
  // tslint:disable-next-line:variable-name
  deleteIncidents(_id)  {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.IncidentRestApi.DeleteIncident(_id).subscribe(data => {
        this.loadIncidents();
      });
    }
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
