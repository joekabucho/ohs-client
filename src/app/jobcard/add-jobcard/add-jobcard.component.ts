import {Component, OnInit, NgZone, Input} from '@angular/core';
import { JobcardService } from '../../shared/jobcard.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-add-jobcard',
    templateUrl: './add-jobcard.component.html',
})
export class AddJobcardComponent implements OnInit {
    // tslint:disable-next-line:max-line-length
    @Input() jobcardDetails = { name: '', customer: '', starting_date : '', end_date: '', workorder_number: '', location_name: '', job_description: '', job_steps: '', hazards: '', uncontainable_risks: '', control_measures: '', controlled_risk_levels: '', status: '', amount_invoiced: ''}

    constructor(
        public restApi: JobcardService,
        public router: Router
    ) { }

    ngOnInit() { }

    addJobcard() {
        this.restApi.createJobcard(this.jobcardDetails).subscribe((data: {}) => {
            this.router.navigate(['/list-jobcard']);
        });
    }

}
