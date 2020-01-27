import { Component, OnInit } from '@angular/core'
import { InductionChecklistService } from '../../shared/induction-checklist.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-inductionchecklist',
  templateUrl: './edit-inductionchecklist.component.html'
})
export class EditInductionchecklistComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _id = this.actRoute.snapshot.params['_id'];
  inductionchecklistData: any = {};

  constructor(public inductionRestApi: InductionChecklistService,
              public actRoute: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit() {
    this.inductionRestApi.GetInductionChecklists(this._id).subscribe((data: {}) => {
      this.inductionchecklistData = data;
      const navbar = document.getElementById('navbar-main');
      navbar.classList.add('bg-primary');
    });

  }
  // Update employee data
  updateInductionChecklist() {
    if(window.confirm('Are you sure, you want to update?')) {
      this.inductionRestApi.UpdateInductionChecklist(this._id, this.inductionchecklistData).subscribe(data => {
        this.router.navigate(['/list-induction-checklist']);
      });
    }
  }

}
