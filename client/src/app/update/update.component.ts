import { Component, OnInit } from '@angular/core';
import { Application } from 'express';
import { ApplicationService } from '../application.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [ApplicationService],
})
export class UpdateComponent implements OnInit {
  applications: any = [];
  application: Application;
  _id: string;
  school_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  message: string;

  constructor(
    private applicationService: ApplicationService,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._id = this._Activatedroute.snapshot.paramMap.get('id');

    this.applicationService.getApplication(this._id).subscribe((data) => {
      this.applications = data;
    });
  }

  update(): void {
    const newupdateApplication = {
      school_name: this.applications.school_name,
      first_name: this.applications.first_name,
      last_name: this.applications.last_name,
      phone: this.applications.phone,
      email: this.applications.email,
    };
    this.applicationService
      .updateApplication(this._id, newupdateApplication)
      .subscribe(
        (response) => {
          console.log(response);
          this.message =
            'Application Updated Successfully. Please click on Go Back Button for New Application.';
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
