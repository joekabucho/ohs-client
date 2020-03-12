
import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../shared/incident.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-incident',
  templateUrl: './edit-incident.component.html',
  styleUrls: ['./edit-incident.component.scss']
})
export class EditIncidentComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  _id = this.actRoute.snapshot.params['_id'];
  incidentData: any = {};

  constructor(public incidentRestApi: IncidentService,
              public actRoute: ActivatedRoute,
              public router: Router) {

  }

  ngOnInit() {
    this.incidentRestApi.GetIncident(this._id).subscribe((data: {}) => {
      this.incidentData = data;
      const navbar = document.getElementById('navbar-main');
      navbar.classList.add('bg-primary');
    });

  }
  updateIncident() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.incidentData.UpdateIncident(this._id, this.incidentData).subscribe(data => {
        this.router.navigate(['/list-jobanalysis']);
      });
    }
  }

}
