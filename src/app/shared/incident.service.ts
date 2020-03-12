

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Incident } from './incident';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IncidentService {

  // Base url
  baseurl = '';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  createIncident(data): Observable<Incident> {
    return this.http.post<Incident>(this.baseurl + '/api/incident/', JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // GET
  // tslint:disable-next-line:variable-name
  GetIncident(_id): Observable<Incident> {
    return this.http.get<Incident>(this.baseurl + '/api/incident/' + _id)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // GET
  GetIncidents(): Observable<Incident> {
    return this.http.get<Incident>(this.baseurl + '/api/incident/')
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // PUT
  // tslint:disable-next-line:variable-name
  UpdateIncident(_id, data): Observable<Incident> {
    return this.http.put<Incident>(this.baseurl + '/api/incident/' + _id, JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // DELETE
  // tslint:disable-next-line:variable-name
  DeleteIncident(_id) {
    return this.http.delete<Incident>(this.baseurl + '/api/incident/' + _id, this.httpOptions)
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
