import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InductionChecklistService } from '../../shared/induction-checklist.service';


@Component({
  selector: 'app-add-inductionchecklist',
  templateUrl: './add-inductionchecklist.component.html'
})
export class AddInductionchecklistComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  @Input() inductionDetails = {  location : '', manager : '', position: '', workplace: '', competencies: '', permits: '', reporting_incidents: '', workplace_safety: '', safe_work_method: '', specialised_equipment: '', ppe_equipment: '', assembly_points: '', medical_facility: '', emergency_services: '', emergency_communication: '', firefighting: '' }

  constructor( public InductionRestApi: InductionChecklistService,
               public router: Router) { }

  ngOnInit() {
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }

  addInduction() {
    this.InductionRestApi.CreateInductionChecklist(this.inductionDetails).subscribe((data: {}) => {
      this.router.navigate(['/list-induction-checklist']);
    });
  }

}
