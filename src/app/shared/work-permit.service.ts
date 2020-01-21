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
    baseurl = 'http://localhost:8000';

    constructor(private http: HttpClient) { }

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    // POST
    CreateWorkPermit(data): Observable<WorkPermit> {
        return this.http.post<WorkPermit>(this.baseurl + '/api/toolbox_talk/', JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // GET
    GetWorkPermits(id): Observable<WorkPermit> {
        return this.http.get<WorkPermit>(this.baseurl + '/api/work_permit/' + id)
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
    UpdateWorkPermit(id, data): Observable<WorkPermit> {
        return this.http.put<WorkPermit>(this.baseurl + '/api/work_permit/' + id, JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // DELETE
    DeleteWorkPermit(id) {
        return this.http.delete<WorkPermit>(this.baseurl + '/api/work_permit/' + id, this.httpOptions)
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
