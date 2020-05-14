import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { dev } from '../../config/dev';
import { JobcardService } from '../../shared/jobcard.service';
import { IncidentService } from '../../shared/incident.service';
import { InductionChecklistService } from '../../shared/induction-checklist.service';
import { JobAnalysisService } from '../../shared/job-analysis.service';
import { WorkPermitService } from '../../shared/work-permit.service';
import { ToolboxTalkService } from '../../shared/toolbox-talk.service';
import { DetectionService } from '../../shared/detection.service';
import {HttpClient} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import {BrowserModule} from '@angular/platform-browser';
import { Chart } from 'chart.js';
import { Detection } from '../../shared/detection';
import { WorkPermit } from '../../shared/work-permit';
import { Jobcard } from '../../shared/jobcard';







@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(
    private jobcardService: JobcardService,
    private jobAnalysisService: JobAnalysisService,
    private incidentService: IncidentService,
    private detectionService: DetectionService,
    private inductionChecklistService: InductionChecklistService,
    private workPermitService: WorkPermitService,
    private toolboxTalkService: ToolboxTalkService,
    private http: HttpClient,
    private httpClient: HttpClient
  ) {
    this.getAllUsers();
    this.getUser();
  }

  radioModel = 'Month';

  focus;
  focus1;
  focus2;
  focus3;
  focus4;

  dtOptions: DataTables.Settings = {};
  isCollapsed = true;

  // tslint:disable-next-line: ban-types
  user: String;
  users: any;
  profile: any;
  url = dev.connect;

  jobcardAmountUrl = 'http://13.59.82.69:8000/api/jobcard';
  jobcardAmountDate: any = [];
  jobcardAmountNumber: any = [];
  jobcardSiteName: any = [];
  Linechart: any = [];
  jobcardAmountData: Jobcard[];


  detectionUrl = 'http://13.59.82.69:8000/api/detection';
  ppeDate: any = [];
  ppeDetected: any = [];
  ppeNotDetected: any = [];
  barchart: any = [];
  detectionData: Detection[];

  workpermitUrl = 'http://13.59.82.69:8000/api/work_permit';
  jobcardUrl = 'http://13.59.82.69:8000/api/jobcard';
  piechart: any = [];
  workpermitData: WorkPermit[];
  jobcardData: Jobcard[];
  workpermitNumber: any = [];
  jobcardNumber: any = [];



  Jobanalysis: any = [];
  Jobcard: any = [];
  Incidents: any = [];
  Detection: any = [];
  Workpermit: any = [];
  Inductionchecklist: any = [];
  Toolboxtalk: any = [];


  ngOnInit() {
    this.loadJobanalysis();
    this.loadDetection();
    this.loadIncident();
    this.loadInductionChecklist();
    this.loadJobcard();
    this.loadToolboxtalkks();
    this.loadWorkpermit();
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-primary');
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.httpClient.get(this.jobcardAmountUrl).subscribe((result: Jobcard[]) => {
      result.forEach(x => {
        this.jobcardAmountDate.push(x.starting_date);
        this.jobcardAmountNumber.push(x.amount_invoiced);
        this.jobcardSiteName.push(x.location_name);
      });

      this.Linechart = new Chart('canvasline', {
        type: 'line',
        data: {
          labels: this.jobcardAmountDate,
          datasets: [
            {
              data: this.jobcardAmountNumber,
              borderColor: '#3cb371',
              backgroundColor: '#0000FF',
              label: this.jobcardSiteName
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });

    this.http.get(this.detectionUrl).subscribe((result: Detection[]) => {
    result.slice(-10, -1).forEach(x => {
        this.ppeDate.push(x.createdAt);
        this.ppeDetected.push(x.person_with_helmet);
        this.ppeNotDetected.push(x.person_without_helmet);
      });
    this.barchart = new Chart('canvasbar', {
        type: 'bar',
        data: {
          labels: this.ppeDate,
          datasets: [
            {
              data: this.ppeNotDetected,
              borderColor: '#3cba9f',
              backgroundColor: 'red',
              label: 'people without PPE',
              fill: true
            },
            {
              data: this.ppeDetected,
              borderColor: '#3cba9f',
              backgroundColor: 'blue',
              label: 'people with PPE',
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
    this.httpClient.get(this.workpermitUrl).subscribe((workpermitresult: WorkPermit[]) => {
      workpermitresult.forEach(x => {
        this.workpermitNumber.push(workpermitresult.length);
      });

      this.httpClient.get(this.jobcardUrl).subscribe((jobcardresult: Jobcard[]) => {
        jobcardresult.forEach(y => {
          this.jobcardNumber.push(jobcardresult.length);
        });

        this.piechart = new Chart('piecanvas', {
        type: 'doughnut',
        data: {
          labels: ['workpermits', 'jobcards'],
          datasets: [
            {
              data: [this.workpermitNumber, this.jobcardNumber],
              backgroundColor: ['#f990a7', '#aad2ed'],
              fill: true
            }
          ],
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: false
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  });
  }
      // generate random values for mainChart

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-danger');
  }
  // Get employees list
  loadJobanalysis() {
    return this.jobAnalysisService.GetJobAnalysiss().subscribe((data: {}) => {
      this.Jobanalysis = data;
    });
  }
  loadJobcard() {
    return this.jobcardService.getJobcard().subscribe((data: {}) => {
      this.Jobcard = data;
    });
  }
  loadIncident() {
    return this.incidentService.GetIncidents().subscribe((data: {}) => {
      this.Incidents = data;
    });
  }
  loadInductionChecklist() {
    return this.inductionChecklistService.GetInductionChecklist().subscribe((data: {}) => {
      this.Inductionchecklist = data;
    });
  }
  loadDetection() {
    return this.detectionService.GetDetections().subscribe((data: {}) => {
      this.Detection = data;
    });
  }


  loadWorkpermit() {
    return this.workPermitService.GetWorkPermit().subscribe((data: {}) => {
      this.Workpermit = data;
    });
  }
  loadToolboxtalkks() {
    return this.toolboxTalkService.GetToolboxTalk().subscribe((data: {}) => {
      this.Toolboxtalk = data;
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

  get totalWorkpermitRows(): number {
    return this.Workpermit.length;
  }

  get totalJobcardRows(): number {
    return this.Jobcard.length;
  }
  get totalJobanalysisRows(): number {
    return this.Jobanalysis.length;
  }
  get totalToolboxRows(): number {
    return this.Toolboxtalk.length;
  }


}
