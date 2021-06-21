import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../application.service';
import { Application } from '../application';
import { FormsModule} from '@angular/forms';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { SchoolDetail} from '../application';

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
  // public zip = '';
  city: string;
  msg: string;

  constructor(private applicationService: ApplicationService) {}



  addApplication() {
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
        console.log(newApplication);
        this.applicationService
          .getApplications()
          .subscribe((applications) => (this.applications = applications));
      });
  }

  deleteApplication(id: any) {
    var applications = this.applications;

    this.applicationService.deleteApplication(id).subscribe((data) => {
      //if(data.n==1)
      {
        for (var i = 0; i < applications.length; i++) {
          if (applications[i]._id == id) {
            applications.splice(i, 1);
          }
        }
      }
    });
  }

  // getSchoolDetail(zip: any) {
  //   this.applicationService
  //     .getSchoolDetail(zip)
  //     .subscribe((schooldetail) => (this.schooldetail = schooldetail));
  // }

  getSchoolDetail(zip: any) {
    this.applicationService
      .getSchoolDetail(zip)
      .subscribe(
        (schooldetail) => {(this.schooldetail = schooldetail);
  },

  (error) => {
    console.log(error);
    this.msg = "no ZIP Message";
  }
  );
}

  

  ngOnInit() {
    this.applicationService
      .getApplications()
      .subscribe((applications) => (this.applications = applications));
  }
}
