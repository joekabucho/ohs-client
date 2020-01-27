import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dev } from '../../config/dev';

@Component({
  selector: 'app-landingpage',
  templateUrl: 'landingpage.component.html'
})
export class LandingpageComponent implements OnInit, OnDestroy {

  focus;
  focus1;
  focus2;
  focus3;
  focus4;


  isCollapsed = true;
  fileToUpload: File = null;
  user: String;
  filename: String;
  amount: String;
  file: any;
  users: any;
  profile: any;

  url = dev.connect;

  constructor(private http: HttpClient) {
    this.getAllUsers();
    this.getUser();
  }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  upload(){
    this.postFile(this.fileToUpload, ('/' + this.fileToUpload.name)).subscribe(data => {
      console.log(data);
       alert('Template was uploaded successfully');
       this.user = '';
       this.amount = '';
       this.filename = '';
       this.fileToUpload = null;
       this.file = '';
    });
  }
  postFile(fileToUpload: File, filename) {

    const formData: FormData = new FormData();
    formData.append('sampleFile', fileToUpload, filename);
    formData.append('user', this.user.toString());
    formData.append('uploadedby', this.profile);
    formData.append('amount', this.amount.toString());
    formData.append('namefile', this.filename.toString());

    return this.http
      .post(this.url+'/api/files', formData);
  }

  getAllUsers(){
    this.http.get(this.url + '/api/user/getAll').subscribe((data) => {
       this.users = data;
    });
  }
  getUser(){
   this.profile = localStorage.getItem('profile');
  }
}
