import { Inject, Injectable } from '@angular/core';
//import {Http, Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable()
export class ApplicationService {
  constructor(private http: HttpClient) {}

  //retrieving application service

  getApplications() {
    return this.http
      .get('http://localhost:3000/api/applications')
      .pipe(map((res) => res));
  }

  //add application method
  addApplication(newApplication) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('http://localhost:3000/api/application', newApplication, {
        headers: headers,
      })
      .pipe(map((res) => res));
  }

  //delete application
  deleteApplication(id: String) {
    return this.http
      .delete('http://localhost:3000/api/application/' + id)
      .pipe(map((res) => res));
  }

  //Update application method
  updateApplication(id: string, newupdateApplication) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put('http://localhost:3000/api/application/' + id, newupdateApplication, {
        headers: headers,
      })
      .pipe(map((res) => res));
  }

  // updateApplication(id, newupdateApplication): Observable<any> {
  //   return this.http.put('http://localhost:3000/api/application/' + id, newupdateApplication);
  // }

  getApplication(id) {
    return this.http
      .get('http://localhost:3000/api/applications/' + id)
      .pipe(map((res) => res));
  }
}
