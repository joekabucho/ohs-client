import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Detection } from './detection';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetectionService {
 // Base url
 baseurl = 'http://13.59.82.69:8000';
  // tslint:disable-next-line:variable-name
 base_path = 'http://13.59.82.69:8000/api/detection';

 constructor(private http: HttpClient) { }

 // Http Headers
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }


 // GET
 // tslint:disable-next-line:variable-name
 GetDetection(_id): Observable<Detection> {
   return this.http.get<Detection>(this.baseurl + '/api/detection/' + _id)
       .pipe(
           retry(1),
           catchError(this.errorHandl)
       );
 }

 // GET
 GetDetections(): Observable<Detection> {
   return this.http.get<Detection>(this.baseurl + '/api/detection/')
       .pipe(
           retry(1),
           catchError(this.errorHandl)
       );
 }

 // DELETE
 // tslint:disable-next-line:variable-name
 DeleteDetection(_id) {
   return this.http.delete<Detection>(this.baseurl + '/api/detection/' + _id, this.httpOptions)
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
