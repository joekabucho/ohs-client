


import { Component, OnInit } from '@angular/core';
import { WorkPermitService } from '../shared/work-permit.service';
import {ToolboxTalkService} from '../shared/toolbox-talk.service';

@Component({
  selector: 'app-view-workpermits',
  templateUrl: './view-workpermits.component.html',
  styleUrls: ['./view-workpermits.component.scss']
})
export class ViewWorkpermitsComponent  implements OnInit {

  Workpermit: any = [];

  constructor(public WorkpermitRestApi: WorkPermitService) { }

  ngOnInit() {
    this.loadWorkPermit();
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }

  loadWorkPermit() {
    return this.WorkpermitRestApi.GetWorkPermit().subscribe((data: {}) => {
      this.Workpermit = data;
    });
  }

  // Delete induction checklist
  // tslint:disable-next-line:variable-name
  deleteWorkPermit(_id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.WorkpermitRestApi.DeleteWorkPermit(_id).subscribe(data => {
        this.loadWorkPermit();
      });
    }
  }
}
