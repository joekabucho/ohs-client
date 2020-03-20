import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ToolboxTalk} from './toolbox-talk';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ToolboxTalkService {

    // Base url
    baseurl = 'http://54.93.236.71:8000';

    constructor(private http: HttpClient) { }

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    // POST
    CreateToolboxTalk(data): Observable<ToolboxTalk> {
        return this.http.post<ToolboxTalk>(this.baseurl + '/api/toolbox_talk/', JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // GET
    GetToolboxTalks(id): Observable<ToolboxTalk> {
        return this.http.get<ToolboxTalk>(this.baseurl + '/api/toolbox_talk/' + id)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // GET
    GetToolboxTalk(): Observable<ToolboxTalk> {
        return this.http.get<ToolboxTalk>(this.baseurl + '/api/toolbox_talk/')
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // PUT
    UpdateToolboxTalk(id, data): Observable<ToolboxTalk> {
        return this.http.put<ToolboxTalk>(this.baseurl + '/api/toolbox_talk/' + id, JSON.stringify(data), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }

    // DELETE
    DeleteToolboxTalk(id) {
        return this.http.delete<ToolboxTalk>(this.baseurl + '/api/toolbox_talk/' + id, this.httpOptions)
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
