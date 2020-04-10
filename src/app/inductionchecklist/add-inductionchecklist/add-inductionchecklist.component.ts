import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { InductionChecklistService } from '../../shared/induction-checklist.service';
import {InductionChecklist} from '../../shared/induction-checklist';
import { JobcardService } from '../../shared/jobcard.service';
import { dev } from '../../config/dev';
import {HttpClient} from '@angular/common/http';





@Component({
  selector: 'app-add-inductionchecklist',
  templateUrl: './add-inductionchecklist.component.html'
})
export class AddInductionchecklistComponent implements OnInit {
  data: InductionChecklist
  Jobcard: any = [];

  user: String;
  users: any;
  profile: any;
  url = dev.connect;


  // tslint:disable-next-line:max-line-length

  constructor( public restApi: InductionChecklistService, public JobcardRestApi: JobcardService,private http: HttpClient,
               public router: Router) {
                this.data = new InductionChecklist();
                this.getAllUsers();
                this.getUser();
                }

  ngOnInit() {
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
    this.loadJobcards();
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
  loadJobcards() {
    return this.JobcardRestApi.getJobcard().subscribe((data: {}) => {
      this.Jobcard = data;
    });
  }
getAllUsers() {
    this.http.get(this.url + '/api/user/getAll').subscribe((data) => {
        this.users = data;
    });
}
getUser() {
    this.profile = localStorage.getItem('profile');
}

}
