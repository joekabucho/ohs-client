import { Component, Input, OnInit } from '@angular/core';
import { ToolboxTalk } from '../../shared/toolbox-talk';
import { Router } from '@angular/router';
import {ToolboxTalkService} from '../../shared/toolbox-talk.service';

@Component({
  selector: 'app-add-toolboxtalk',
  templateUrl: './add-toolboxtalk.component.html'
})
export class AddToolboxtalkComponent implements OnInit {

  data: ToolboxTalk
  // tslint:disable-next-line:max-line-length

  constructor( public ToolboxRestApi: ToolboxTalkService,
               public router: Router) {
                this.data = new ToolboxTalk();

                }

  ngOnInit() {
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }


   
  submitForm() {
    this.ToolboxRestApi.createItem(this.data).subscribe((response) => {
      this.router.navigate(['/list-toolbox-talk']);
    });
 
  }

}
