import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToolboxTalkService} from '../../shared/toolbox-talk.service';

@Component({
  selector: 'app-add-toolboxtalk',
  templateUrl: './add-toolboxtalk.component.html'
})
export class AddToolboxtalkComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  @Input() toolboxDetails = {resource_plan   : '', necessary_proc  : '', gov_monitor : '', h2s_training : '', hard_hat : '', boots : '', coverwalls : '' ,hearing_protection : '', other_ppe : '', scope : '', material : '', traffic_control : '', mobile_phones : '', incident_reporting : '', smoking : '', speed_limits : '' , first_aid_kit  : '', emergency  : '', regulatory_requests : '', fire_permit : '', task_hazard : '' , site_work_permit : '', ground_disturbance : '', other_permit_forms : '', fire_extinguishers : '', prestat_check : '', back_up_alarm : '', positive_air_shafts : '', people_onboard : '', wall_heads : '', others_on_site : '', third_party_support : '' , signs: ''}

  constructor( public ToolboxRestApi: ToolboxTalkService,
               public router: Router) { }

  ngOnInit() {
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }
  addToolboxTalk() {
    this.ToolboxRestApi.CreateToolboxTalk(this.toolboxDetails).subscribe((data: {}) => {
      this.router.navigate(['/list-toolbox-talk']);
    });
  }

}
