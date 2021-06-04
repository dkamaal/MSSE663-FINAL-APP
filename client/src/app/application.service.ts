import { Inject, Injectable } from '@angular/core';
//import {Http, Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  deleteApplication(id) {
    return this.http
      .delete('http://localhost:3000/api/application/' + id)
      .pipe(map((res) => res));
  }

  //Update application method
  updateApplication(id, newApplication) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put('http://localhost:3000/api/application' + id, newApplication, {
        headers: headers,
      })
      .pipe(map((res) => res));
  }
}
