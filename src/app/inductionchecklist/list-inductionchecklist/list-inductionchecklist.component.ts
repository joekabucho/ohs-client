import { Component, OnInit } from '@angular/core';
import { InductionChecklistService } from '../../shared/induction-checklist.service';

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

}
