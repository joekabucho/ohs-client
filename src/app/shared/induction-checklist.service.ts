import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {InductionChecklist } from './induction-checklist';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class InductionChecklistService {

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
  CreateInductionChecklist(data): Observable<InductionChecklist> {
    return this.http.post<InductionChecklist>(this.baseurl + '/api/induction_checklist', JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // GET
  // tslint:disable-next-line:variable-name
  GetInductionChecklists(_id): Observable<InductionChecklist> {
    return this.http.get<InductionChecklist>(this.baseurl + '/api/induction_checklist/' + _id)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // GET
  GetInductionChecklist(): Observable<InductionChecklist> {
    return this.http.get<InductionChecklist>(this.baseurl + '/api/induction_checklist/')
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // PUT
  // tslint:disable-next-line:variable-name
  UpdateInductionChecklist(_id, data): Observable<InductionChecklist> {
    return this.http.put<InductionChecklist>(this.baseurl + '/api/induction_checklist/' + _id, JSON.stringify(data), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
  }

  // DELETE
  // tslint:disable-next-line:variable-name
  DeleteInductionChecklist(_id) {
    return this.http.delete<InductionChecklist>(this.baseurl + '/api/induction_checklist/' + _id, this.httpOptions)
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
