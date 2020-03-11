import {Component, OnInit, NgZone, Input} from '@angular/core';
import { JobcardService } from '../../shared/jobcard.service';
import { Router } from '@angular/router';
import { dev } from '../../config/dev';
import {HttpClient} from '@angular/common/http';


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

    // tslint:disable-next-line:max-line-length
    @Input() jobcardDetails = { name: '', customer: '', starting_date : '', end_date: '', workorder_number: '', location_name: '', job_description: '', job_steps: '', hazards: '', uncontainable_risks: '', control_measures: '', controlled_risk_levels: '', status: '', amount_invoiced: '', issue_to: ''}

    constructor(
        public restApi: JobcardService,
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

    addJobcard() {
        const formData: FormData = new FormData();
        this.restApi.createJobcard(this.jobcardDetails).subscribe((data: {}) => {
            this.router.navigate(['/list-jobcard']);
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
