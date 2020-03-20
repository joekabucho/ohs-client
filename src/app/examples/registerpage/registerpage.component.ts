import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { dev } from '../../config/dev';
import { RestApiService } from '../../shared/rest-api.service';
import { NotificationService } from '../../shared/notification';
import { ToastrService } from 'ngx-toastr';




@Component({
    selector: 'app-registerpage',
    templateUrl: 'registerpage.component.html'
})
export class RegisterpageComponent implements  OnInit, OnDestroy {
    focus;
    focus1;
    focus2;
    focus3;
    focus4;
    focus5;

    email: String;
    password: String;
    error: String;
    notification: boolean;
    wrongdetails: boolean;


    semail: String;
    spassword: String;
    srole: String = 'User';
    sdepartment: String = 'User';
    sname: String;
    serror: String;
    snotification: boolean;
    swrongdetails: boolean;
    scode: Number;

    url = dev.connect;

    constructor(private http: HttpClient, private router: Router,
                private notificationservice: NotificationService,
                private toast: ToastrService
    )
    {}

    ngOnInit() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');

        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            console.log("Clicked signup")
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            console.log("Clicked signin")
            container.classList.remove('right-panel-active');
        });
    }

    ngOnDestroy() {
        let body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    }
    signIn() {
        if (this.email === undefined || this.password === undefined ||
            this.email === '' || this.password === '' ||
            this.email == null || this.password == null) {

            this.notification = true;
            this.wrongdetails = false;
        } else if (!this.email.includes('@')) {
            this.error = 'An error occured not a valid email address.';
            this.wrongdetails = true;
            this.notification = false;
        } else if ( !this.email.includes('.')) {
            this.error = 'An error occured not a valid email addresss .';
            this.wrongdetails = true;
            this.notification = false;
        } else if (this.email.includes('@') && this.email.includes('.')) {

            const payload = {
                email: this.email,
                password: this.password
            };

            this.http.post<any>(this.url + '/api/user/login', payload).subscribe(data => {
                if (data) {
                  this.saveUserDetails(data);
                    // tslint:disable-next-line:triple-equals
                  if (data.role === 'job_author') {
                        this.router.navigateByUrl('list-jobcard');
                    }
                  if (data.role === 'technician') {
                        this.router.navigateByUrl('contact-us');
                    }
                  if (data.role === 'pm_hod') {
                        this.router.navigateByUrl( 'pm-dashboard');
                    }
                  if (data.role === 'ohs_officer') {
                        this.router.navigateByUrl('ohs-dashboard');
                    }
                  if (data.role === 'noc_officer') {
                        this.router.navigateByUrl('noc-dashboard');
                    }
                }
              }, error => {
               // console.log("An error occured");
               alert('Login error, you sure you used the right credentials?');
              }
              );
            }
          }

    verify() {
        const container = document.getElementById('container');

        if (this.semail === undefined || this.spassword === undefined || this.sname === undefined) {
            this.snotification = true;
        } else if (!this.semail.includes('@')) {
            this.error = 'An error occured.';
            this.swrongdetails = true;
            this.snotification = false;
        } else if (!this.semail.includes('.')) {
            this.error = 'An error occured.';
            this.swrongdetails = true;
            this.snotification = false;
        } else {
            const payload = {
                email: this.semail,
                role: this.srole,
                password: this.spassword,
                department: this.sdepartment,
                name: this.sname,

            };

            this.http.post<any>(this.url + '/api/user/verify', payload).subscribe(data => {
                    if (data) {
                        // this.toast.success("Use the code sent to your email to finalize the account creation", "Registration Message!");
                        (document.getElementById('code') as HTMLElement).style.display = 'block';
                        (document.getElementById('verify') as HTMLElement).style.display = 'none';
                        (document.getElementById('signup') as HTMLElement).style.display = 'block';

                        alert("Use the code sent to your email to finalize the account creation");
                    }
                }, error =>{
                    alert("An error occured.");
                    //  (document.getElementById('sger') as HTMLElement).style.display = 'block';
                }
            );
        }
    }

    signUp() {
        const container = document.getElementById('container');
        if (this.semail === undefined || this.spassword === undefined || this.sname === undefined) {
            this.snotification = true;
        } else if (!this.semail.includes('@')) {
            this.error = 'An error occured.';
            this.swrongdetails = true;
            this.snotification = false;
        } else if (!this.semail.includes('.')) {
            this.error = 'An error occured.';
            this.swrongdetails = true;
            this.snotification = false;
        } else {
            const payload = {
                email: this.semail,
                role: this.srole,
                password: this.spassword,
                department: this.sdepartment,
                name: this.sname,
                code : this.scode
            };
            console.log(payload);

            this.http.post<any>(this.url + '/api/user/register', payload).subscribe(data => {
                if (data) {
                    console.log(data);
                    container.classList.remove('right-panel-active');
                }

            });
        }
    }

    saveUserDetails(user){
        localStorage.setItem('profile', user._id.toString());
    }
}
