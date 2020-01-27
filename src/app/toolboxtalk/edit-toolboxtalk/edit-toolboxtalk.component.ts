import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ToolboxTalkService} from '../../shared/toolbox-talk.service';

@Component({
  selector: 'app-edit-toolboxtalk',
  templateUrl: './edit-toolboxtalk.component.html'
})
export class EditToolboxtalkComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  _id = this.actRoute.snapshot.params['_id'];
  toolboxdData: any = {};

  constructor(public toolboxRestApi: ToolboxTalkService,
              public actRoute: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit() {
    this.toolboxRestApi.GetToolboxTalks(this._id).subscribe((data: {}) => {
      this.toolboxdData = data;
      const navbar = document.getElementById('navbar-main');
      navbar.classList.add('bg-primary');
    });

  }
  // Update employee data
  updateToolbox() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.toolboxRestApi.UpdateToolboxTalk(this._id, this.toolboxdData).subscribe(data => {
        this.router.navigate(['/list-toolbox-talk']);
      });
    }
  }

}
