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
  apiURL = 'http://13.59.82.69:8000';
  base_path = 'http://13.59.82.69:8000/api/jobcard';

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
  // tslint:disable-next-line:variable-name
  getJobcards(_id): Observable<Jobcard> {
    return this.http.get<Jobcard>(this.apiURL + '/api/jobcard/' + _id)
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
  createItem(item): Observable<Jobcard> {
    return this.http
      .post<Jobcard>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  // tslint:disable-next-line:variable-name
  updateJobcard(_id, jobcard): Observable<Jobcard> {
    return this.http.put<Jobcard>(this.apiURL + '/api/jobcard/' + _id, JSON.stringify(jobcard), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
  }

  // HttpClient API delete() method => Delete employee
  // tslint:disable-next-line:variable-name
  deleteJobcard(_id) {
    return this.http.delete<Jobcard>(this.apiURL + '/api/jobcard/' + _id, this.httpOptions)
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
