

import { Component, OnInit } from '@angular/core';
import { InductionChecklistService } from '../shared/induction-checklist.service';
import { JobcardService } from '../shared/jobcard.service';
import { ToolboxTalkService } from '../shared/toolbox-talk.service';

@Component({
  selector: 'app-noc-dashboard',
  templateUrl: './noc-dashboard.component.html',
  styleUrls: ['./noc-dashboard.component.scss']
})
export class NocDashboardComponent implements OnInit {

  isCollapsed = false;

  Jobcard: any = [];
  Toolboxtalk: any = [];
  Inductionchecklist: any = [];

  // tslint:disable-next-line:max-line-length
  constructor(    public InductionchecklistRestApi: InductionChecklistService, public JobcardRestApi: JobcardService , public ToolboxRestApi: ToolboxTalkService
  ) { }

  ngOnInit() {
    this.loadJobcards();
    this.loadInductionchecklists();
    this.loadToolboxTalk();
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');

  }
  // Get employees list
  loadInductionchecklists() {
    return this.InductionchecklistRestApi.GetInductionChecklist().subscribe((data: {}) => {
      this.Inductionchecklist = data;
    });
  }
  loadToolboxTalk() {
    return this.ToolboxRestApi.GetToolboxTalk().subscribe((data: {}) => {
      this.Toolboxtalk = data;
    });
  }

  // Delete induction checklist
  // tslint:disable-next-line:variable-name
  DeleteInductionChecklist(_id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.InductionchecklistRestApi.DeleteInductionChecklist(_id).subscribe(data => {
        this.loadInductionchecklists();
      });
    }
  }
  loadJobcards() {
    return this.JobcardRestApi.getJobcard().subscribe((data: {}) => {
      this.Jobcard = data;
    });
  }

}
