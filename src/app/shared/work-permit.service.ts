import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {WorkPermit} from './work-permit';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class WorkPermitService {

    // Base url
    baseurl = 'http://13.59.82.69:8000';
    base_path = 'http://13.59.82.69:8000/api/work_permit';

    constructor(private http: HttpClient) { }

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    // POST
    CreateWorkPermit(data): Observable<WorkPermit> {
        return this.http.post<WorkPermit>(this.baseurl + '/api/work_permit/', JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }
    createItem(item): Observable<WorkPermit> {
        return this.http
          .post<WorkPermit>(this.base_path, JSON.stringify(item), this.httpOptions)
          .pipe(
            retry(2),
            catchError(this.errorHandl)
          )
      }

    // GET
    // tslint:disable-next-line:variable-name
    GetWorkPermits(_id): Observable<WorkPermit> {
        return this.http.get<WorkPermit>(this.baseurl + '/api/work_permit/' + _id)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // GET
    GetWorkPermit(): Observable<WorkPermit> {
        return this.http.get<WorkPermit>(this.baseurl + '/api/work_permit/')
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // PUT
    // tslint:disable-next-line:variable-name
    UpdateWorkPermit(_id, data): Observable<WorkPermit> {
        return this.http.put<WorkPermit>(this.baseurl + '/api/work_permit/' + _id, JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // DELETE
    // tslint:disable-next-line:variable-name
    DeleteWorkPermit(_id) {
        return this.http.delete<WorkPermit>(this.baseurl + '/api/work_permit/' + _id, this.httpOptions)
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
