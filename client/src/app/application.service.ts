import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApplicationService {
  constructor(private http: HttpClient) {}

  //get schooldetail by zip code

  getSchoolDetail(zip: number) {
    return this.http
      .get('http://localhost:3000/api/schooldetail/' + zip)
      .pipe(map((res) => res));
  }

  //retrieving application service

  getApplications() {
    return this.http
      .get('http://localhost:3000/api/applications')
      .pipe(map((res) => res));
  }

  //add application method
  addApplication(newApplication: {
    _id: string;
    school_name: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  }) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('http://localhost:3000/api/application', newApplication, {
        headers: headers,
      })
      .pipe(map((res) => res));
  }

  //delete application
  deleteApplication(id: string) {
    return this.http
      .delete('http://localhost:3000/api/application/' + id)
      .pipe(map((res) => res));
  }

  //Update application method
  updateApplication(
    id: string,
    newupdateApplication: {
      school_name: string;
      first_name: string;
      last_name: string;
      phone: string;
      email: string;
    }
  ) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http
      .put(
        'http://localhost:3000/api/application/' + id,
        newupdateApplication,
        {
          headers: headers,
        }
      )
      .pipe(map((res) => res));
  }

  getApplication(id: string) {
    return this.http
      .get('http://localhost:3000/api/applications/' + id)
      .pipe(map((res) => res));
  }
}
