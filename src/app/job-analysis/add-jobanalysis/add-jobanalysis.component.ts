


import {Component, OnInit, NgZone, Input} from '@angular/core';
import { JobAnalysisService } from '../../shared/job-analysis.service';
import { Router } from '@angular/router';
import { dev } from '../../config/dev';
import {HttpClient} from '@angular/common/http';
import {JobAnalysis} from '../../shared/job-analysis';


@Component({
    selector: 'app-add-jobanalysis',
    templateUrl: './add-jobanalysis.component.html',
    styleUrls: ['./add-jobanalysis.component.scss']
})
export class AddJobanalysisComponent implements OnInit {
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
    data: JobAnalysis


    // tslint:disable-next-line:max-line-length

    constructor(
        public restApi: JobAnalysisService,
        public router: Router,
        private http: HttpClient
    ) {
        this.getAllUsers();
        this.getUser();
        this.data = new JobAnalysis;
    }

    ngOnInit() {
        const navbar = document.getElementById('navbar-main');
        navbar.classList.add('bg-primary');
    }

    // addJobanalysis() {
    //     const formData: FormData = new FormData();
    //     this.restApi.CreateJobAnalysis(this.jobanalysisDetails).subscribe((data: {}) => {
    //         this.router.navigate(['/list-jobanalysis']);
    //     });
    //     return this.http
    //         .post(this.url + '/api/files', formData);
    // }
    submitForm() {
        this.restApi.createItem(this.data).subscribe((response) => {
          this.router.navigate(['/list-jobanalysis']);
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
