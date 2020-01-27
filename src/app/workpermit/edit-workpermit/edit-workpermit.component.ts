import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {WorkPermitService} from '../../shared/work-permit.service';
import {ToolboxTalkService} from '../../shared/toolbox-talk.service';

@Component({
  selector: 'app-edit-workpermit',
  templateUrl: './edit-workpermit.component.html',
  styleUrls: ['./edit-workpermit.component.scss']
})
export class EditWorkpermitComponent implements OnInit {
// tslint:disable-next-line:variable-name
  _id = this.actRoute.snapshot.params['_id'];
  workpermitData: any = {};

  constructor(public workpermitRestApi: WorkPermitService,
              public actRoute: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit() {
    this.workpermitRestApi.GetWorkPermits(this._id).subscribe((data: {}) => {
      this.workpermitData = data;
      const navbar = document.getElementById('navbar-main');
      navbar.classList.add('bg-primary');
    });

  }
  // Update employee data
  updateWorkpermit() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.workpermitRestApi.UpdateWorkPermit(this._id, this.workpermitData).subscribe(data => {
        this.router.navigate(['/list-workpermit']);
      });
    }
  }

}
