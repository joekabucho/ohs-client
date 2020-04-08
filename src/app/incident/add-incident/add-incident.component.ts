

import {Component, OnInit, NgZone, Input} from '@angular/core';
import { IncidentService } from '../../shared/incident.service';
import { Router } from '@angular/router';
import { dev } from '../../config/dev';
import {HttpClient} from '@angular/common/http';
import {Incident} from '../../shared/incident';


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

  // tslint:disable-next-line:ban-types
  user: String;
  users: any;
  profile: any;
  url = dev.connect;
  data: Incident


  // tslint:disable-next-line:max-line-length

  constructor(
      public restApi: IncidentService,
      public router: Router,
      private http: HttpClient
  ) {
    this.getAllUsers();
    this.getUser();
    this.data = new Incident();
  }

  ngOnInit() {
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }

  // addIncident() {
  //   const formData: FormData = new FormData();
  //   this.restApi.createIncident(this.incidentDetails).subscribe((data: {}) => {
  //     this.router.navigate(['/list-incident']);
  //   });
  //   return this.http
  //       .post(this.url + '/api/files', formData);
  // }
  submitForm() {
    this.restApi.createItem(this.data).subscribe((response) => {
      this.router.navigate(['/list-incident']);
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
