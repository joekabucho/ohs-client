import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InductionChecklistService } from '../../shared/induction-checklist.service';
import {InductionChecklist} from '../../shared/induction-checklist';


@Component({
  selector: 'app-add-inductionchecklist',
  templateUrl: './add-inductionchecklist.component.html'
})
export class AddInductionchecklistComponent implements OnInit {
  data: InductionChecklist

  // tslint:disable-next-line:max-line-length

  constructor( public restApi: InductionChecklistService,
               public router: Router) {
                this.data = new InductionChecklist();
                }

  ngOnInit() {
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
  }

  // addInduction() {
  //   this.InductionRestApi.CreateInductionChecklist(this.inductionDetails).subscribe((data: {}) => {
  //     this.router.navigate(['/list-induction-checklist']);
  //   });
  // }
  submitForm() {
    this.restApi.createItem(this.data).subscribe((response) => {
      this.router.navigate(['/list-induction-checklist']);
    });
 
  }

}
