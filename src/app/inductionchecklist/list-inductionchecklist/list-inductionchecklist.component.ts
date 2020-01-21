import { Component, OnInit } from '@angular/core';
import { InductionChecklistService } from '../../shared/induction-checklist.service';
import {JobcardService} from '../../shared/jobcard.service';

@Component({
  selector: 'app-list-inductionchecklist',
  templateUrl: './list-inductionchecklist.component.html'
})
export class ListInductionchecklistComponent implements OnInit {

    Inductionchecklist: any = [];

    constructor(    public InductionchecklistRestApi: InductionChecklistService
    ) { }

    ngOnInit() {
        this.loadInductionchecklists();

    }
    // Get employees list
    loadInductionchecklists() {
        return this.InductionchecklistRestApi.getInductionchecklists().subscribe((data: {}) => {
            this.Inductionchecklist = data;
        });
    }

    // Delete induction checklist
    DeleteInductionChecklist(id) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.InductionchecklistRestApi.DeleteInductionChecklist(id).subscribe(data => {
                this.loadInductionchecklists();
            });
        }
    }

}
