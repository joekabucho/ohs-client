
import { Component, OnInit } from '@angular/core';
import { JobAnalysisService } from '../../shared/job-analysis.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-jobanalysis',
  templateUrl: './edit-jobanalysis.component.html',
  styleUrls: ['./edit-jobanalysis.component.scss']
})
export class EditJobanalysisComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _id = this.actRoute.snapshot.params['_id'];
  jobanalysisData: any = {};

  constructor(public jobanalysisRestApi: JobAnalysisService,
              public actRoute: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit() {
    this.jobanalysisRestApi.GetJobAnalysis(this._id).subscribe((data: {}) => {
      this.jobanalysisData = data;
      const navbar = document.getElementById('navbar-main');
      navbar.classList.add('bg-primary');
    });

  }
  updateJobanalysis() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.jobanalysisData.UpdateJobAnalysis(this._id, this.jobanalysisData).subscribe(data => {
        this.router.navigate(['/list-jobcardanalysis']);
      });
    }
  }

}
