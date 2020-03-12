

import {Component, OnInit, NgZone, Input} from '@angular/core';
import { IncidentService } from '../../shared/incident.service';
import { Router } from '@angular/router';
import { dev } from '../../config/dev';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.scss']
})
export class AddIncidentComponent implements OnInit {
  focus;
  focus1;
  focus2;
  focus3;
  focus4;


  isCollapsed = true;

  user: String;
  users: any;
  profile: any
  url = dev.connect;

  // tslint:disable-next-line:max-line-length
  @Input() incidentDetails = { id: '', createdAt: '', serious_injury : '', serious_incident: '', first_aid: '', medical_aid: '', potential_serious: '', property_damage: '', production_loss: '', date_time_reported: '', worker_job_title: '', date_of_incident: '', first_aider: '', supervisor: '', another_worker: '', ohs_committee_member: '', ohs_representative: '', employer: '', prime_contractor: '', other_person: ''};

  constructor(
      public restApi: IncidentService,
      public router: Router,
      private http: HttpClient
  ) {
    this.getAllUsers();
    this.getUser();
  }

  ngOnInit() {
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }

  addIncident() {
    const formData: FormData = new FormData();
    this.restApi.CreateIncident(this.incidentDetails).subscribe((data: {}) => {
      this.router.navigate(['/list-incident']);
    });
    return this.http
        .post(this.url + '/api/files', formData);
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
