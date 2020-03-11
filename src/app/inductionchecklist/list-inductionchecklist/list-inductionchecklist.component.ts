import { Component, OnInit } from '@angular/core';
import { InductionChecklistService } from '../../shared/induction-checklist.service';
import { JobcardService } from '../../shared/jobcard.service';

@Component({
  selector: 'app-list-inductionchecklist',
  templateUrl: './list-inductionchecklist.component.html'
})
export class ListInductionchecklistComponent implements OnInit {

    isCollapsed = false;

    Jobcard: any = [];

    Inductionchecklist: any = [];

    constructor(    public InductionchecklistRestApi: InductionChecklistService, public JobcardRestApi: JobcardService
    ) { }

    ngOnInit() {
        this.loadJobcards();
        this.loadInductionchecklists();
        const navbar = document.getElementById('navbar-main');
        navbar.classList.add('bg-primary');

    }
    // Get employees list
    loadInductionchecklists() {
        return this.InductionchecklistRestApi.GetInductionChecklist().subscribe((data: {}) => {
            this.Inductionchecklist = data;
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
