import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Application } from '../application';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
  providers: [ApplicationService],
})
export class ApplicationsComponent implements OnInit {
  applications: any = [];
  application: Application;
  _id: string;
  school_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  schooldetail: any = [];
  schoolname: string;
  rating: number;
  zip: number;
  city: string;
  msg: string;

  constructor(private applicationService: ApplicationService) {}

  addApplication(): void {
    const newApplication = {
      _id: this._id,
      school_name: this.school_name,
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
      email: this.email,
    };
    this.applicationService
      .addApplication(newApplication)
      .subscribe((application) => {
        this.applications.push(application);
        this.applicationService
          .getApplications()
          .subscribe((applications) => (this.applications = applications));
      });
  }

  deleteApplication(id: string): void {
    const applications = this.applications;

    this.applicationService.deleteApplication(id).subscribe(() => {
      {
        for (let i = 0; i < applications.length; i++) {
          if (applications[i]._id == id) {
            applications.splice(i, 1);
          }
        }
      }
    });
  }

  getSchoolDetail(zip: number): void {
    this.applicationService.getSchoolDetail(zip).subscribe(
      (schooldetail) => {
        this.schooldetail = schooldetail;
      },

      (error) => {
        console.log(error);
        this.msg = 'No School available';
      }
    );
  }

  ngOnInit(): void {
    this.applicationService
      .getApplications()
      .subscribe((applications) => (this.applications = applications));
  }
}
