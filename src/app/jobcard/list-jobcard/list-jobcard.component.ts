import { Component, OnInit} from '@angular/core';
import { JobcardService } from '../../shared/jobcard.service';

@Component({
  selector: 'app-list-jobcard',
  templateUrl: './list-jobcard.component.html'
})
export class ListJobcardComponent implements OnInit {
  Jobcard: any = [];

  constructor(    public JobcardRestApi: JobcardService
  ) { }

  ngOnInit() {
    this.loadJobcards();

  }
  // Get employees list
  loadJobcards() {
    return this.JobcardRestApi.getJobcard().subscribe((data: {}) => {
      this.Jobcard = data;
    });
  }

  // Delete employee
  deleteJobcard(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.JobcardRestApi.deleteJobcard(id).subscribe(data => {
        this.loadJobcards();
      });
    }
  }

}
