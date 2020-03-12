import { Component, OnInit, OnDestroy } from '@angular/core';
import {dev} from '../../config/dev';
import {HttpClient} from '@angular/common/http';
declare const google: any;
import { JobcardService } from '../../shared/jobcard.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {TemplateRef} from '@angular/core';
import { WorkPermitService } from '../../shared/work-permit.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html'
})
export class ContactusComponent implements OnInit, OnDestroy {
  user: String;
  users: any;
  focus;
  focus1;
  focus2;
  focus3;
  jobs: any;

  profile: any;
  url = dev.connect;
  modalRef: BsModalRef;

  Jobcard: any = [];
  Workpermit: any = [];

  // tslint:disable-next-line:max-line-length
  constructor( public JobcardRespApi: JobcardService , private http: HttpClient, private modalService: BsModalService, public WorkpermitRestApi: WorkPermitService) {

    this.getAllUsers();
    this.getUser();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.loadJobcards();
    this.getUsersJobcards();
    this.loadWorkPermit();
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('contact-page');

    let navbar = document.getElementById('navbar-main');
    navbar.classList.add('bg-default');

    let myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    let mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
          featureType: 'administrative',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#444444'
          }]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [{
            color: '#f2f2f2'
          }]
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: [{
            visibility: 'off'
          }]
        },
        {
          featureType: 'road',
          elementType: 'all',
          stylers: [{
            saturation: -100
          }, {
            lightness: 45
          }]
        },
        {
          featureType: 'road.highway',
          elementType: 'all',
          stylers: [{
            visibility: 'simplified'
          }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [{
            visibility: 'off'
          }]
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [{
            visibility: 'off'
          }]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [{
            color: '#C5CBF5'
          }, {
            visibility: 'on'
          }]
        }
      ]
    };

    const map = new google.maps.Map(document.getElementById('map-contactus-3'), mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Hello World!'
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('contact-page');

    const navbar = document.getElementById('navbar-main');
    navbar.classList.remove('bg-default');
  }
  loadJobcards() {
    return this.JobcardRespApi.getJobcard().subscribe(data => {
      this.Jobcard = data;
    });
  }
  loadWorkPermit() {
    return this.WorkpermitRestApi.GetWorkPermit().subscribe((data: {}) => {
      this.Workpermit = data;
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

  getUsersJobcards() {
    const payload ={
      userid: this.profile
    }
    return this.http.post(this.url + '/api/files/user', payload).subscribe((data) => {
      this.jobs = data;
    });
  }
}
