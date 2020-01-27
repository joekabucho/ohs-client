import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {WorkPermitService} from '../../shared/work-permit.service';
import { dev } from '../../config/dev';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-workpermit',
  templateUrl: './add-workpermit.component.html'
})
export class AddWorkpermitComponent implements OnInit {
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
  // tslint:disable-next-line:max-line-length
  @Input() workpermitDetails = { created_by  : '', approver_by  : '', ammendments: '', issued_by: '', site_name: '', project: '', Technician: '', comments: '', valid_from: '', valid_to: '',issue_to:'' }

  constructor(public WorkpermitRestApi: WorkPermitService,
              public router: Router,
              private http: HttpClient)  {
    this.getAllUsers();
    this.getUser();
  }

  ngOnInit() {
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }
addWorkPermit() {
  this.WorkpermitRestApi.CreateWorkPermit(this.workpermitDetails).subscribe((data: {}) => {
    this.router.navigate(['/list-workpermit']);
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
