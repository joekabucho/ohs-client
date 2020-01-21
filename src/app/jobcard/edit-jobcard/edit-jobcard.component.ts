import { Component, OnInit } from '@angular/core';
import { JobcardService } from '../../shared/jobcard.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-jobcard',
  templateUrl: './edit-jobcard.component.html'
})
export class EditJobcardComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  jobcardData: any = {};

  constructor(public jobcardRestApi: JobcardService,
              public actRoute: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit() {
    this.jobcardRestApi.getJobcards(this.id).subscribe((data: {}) => {
      this.jobcardData = data;
    });

  }
  // Update employee data
  updateJobcard() {
    if(window.confirm('Are you sure, you want to update?')) {
      this.jobcardRestApi.updateJobcard(this.id, this.jobcardData).subscribe(data => {
        this.router.navigate(['/list-jobcard']);
      });
    }
  }

}
