import { Component, OnInit } from '@angular/core';
import { ToolboxTalkService } from '../../shared/toolbox-talk.service';

@Component({
  selector: 'app-list-toolboxtalk',
  templateUrl: './list-toolboxtalk.component.html'
})
export class ListToolboxtalkComponent implements OnInit {

  Toolboxtalk: any = [];

  constructor( public ToolboxRestApi: ToolboxTalkService) { }

  ngOnInit() {
    this.loadToolboxTalk();
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }

  loadToolboxTalk() {
    return this.ToolboxRestApi.GetToolboxTalk().subscribe((data: {}) => {
      this.Toolboxtalk = data;
    });
  }

  // Delete induction checklist
  // tslint:disable-next-line:variable-name
  deleteToolboxTalk(_id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.ToolboxRestApi.DeleteToolboxTalk(_id).subscribe(data => {
        this.loadToolboxTalk();
      });
    }
  }

}
