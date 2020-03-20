


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JobAnalysis } from './job-analysis';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JobAnalysisService {

  // Base url
  baseurl = 'http://54.93.236.71:8000';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateJobAnalysis(data): Observable<JobAnalysis> {
    return this.http.post<JobAnalysis>(this.baseurl + '/api/job_analysis', JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // GET
  // tslint:disable-next-line:variable-name
  GetJobAnalysis(_id): Observable<JobAnalysis> {
    return this.http.get<JobAnalysis>(this.baseurl + '/api/job_analysis/' + _id)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // GET
  GetJobAnalysiss(): Observable<JobAnalysis> {
    return this.http.get<JobAnalysis>(this.baseurl + '/api/job_analysis')
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // PUT
  // tslint:disable-next-line:variable-name
  UpdateJobAnalysis(_id, data): Observable<JobAnalysis> {
    return this.http.put<JobAnalysis>(this.baseurl + '/api/job_analysis/' + _id, JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // DELETE
  // tslint:disable-next-line:variable-name
  DeleteJobAnalysis(_id) {
    return this.http.delete<JobAnalysis>(this.baseurl + '/api/job_analysis/' + _id, this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
