import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jobcard } from './jobcard';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JobcardService {

  // Define API
  apiURL = '';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch employees list
  getJobcard(): Observable<Jobcard> {
    return this.http.get<Jobcard>(this.apiURL + '/api/jobcard')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
  }

  // HttpClient API get() method => Fetch employee
  getJobcards(id): Observable<Jobcard> {
    return this.http.get<Jobcard>(this.apiURL + '/api/jobcard/' + id)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
  }

  // HttpClient API post() method => Create employee
  createJobcard(jobcard): Observable<Jobcard> {
    return this.http.post<Jobcard>(this.apiURL + '/api/jobcard', JSON.stringify(jobcard), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
  }

  // HttpClient API put() method => Update employee
  updateJobcard(id, jobcard): Observable<Jobcard> {
    return this.http.put<Jobcard>(this.apiURL + '/api/jobcard/' + id, JSON.stringify(jobcard), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
  }

  // HttpClient API delete() method => Delete employee
  deleteJobcard(id) {
    return this.http.delete<Jobcard>(this.apiURL + '/api/jobcard/' + id, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
