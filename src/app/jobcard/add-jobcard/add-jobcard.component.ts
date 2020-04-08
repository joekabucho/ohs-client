import {Component, OnInit, NgZone, Input} from '@angular/core';
import { JobcardService } from '../../shared/jobcard.service';
import { Router } from '@angular/router';
import { dev } from '../../config/dev';
import {HttpClient} from '@angular/common/http';
import {Jobcard} from '../../shared/jobcard';


@Component({
    selector: 'app-add-jobcard',
    templateUrl: './add-jobcard.component.html',
})
export class AddJobcardComponent implements OnInit {
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
    data: Jobcard


    // tslint:disable-next-line:max-line-length

    constructor(
        public restApi: JobcardService,
        public router: Router,
        private http: HttpClient
    ) {
        this.data = new Jobcard();
        this.getAllUsers();
        this.getUser();
    }

    ngOnInit() {
        const navbar = document.getElementById('navbar-main');
        navbar.classList.add('bg-primary');
    }

    // addJobcard() {
    //     const formData: FormData = new FormData();
    //     this.restApi.createJobcard(this.jobcardDetails).subscribe((data: {}) => {
    //         this.router.navigate(['/list-jobcard']);
    //     });
    //     return this.http
    //         .post(this.url + '/api/files', formData);
    // }
    submitForm() {
        this.restApi.createItem(this.data).subscribe((response) => {
          this.router.navigate(['/list-jobcard']);
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
