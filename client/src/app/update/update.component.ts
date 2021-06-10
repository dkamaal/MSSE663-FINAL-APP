import { Component, OnInit, Input } from '@angular/core';
import { Application, Router } from 'express';
import { ApplicationService } from '../application.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [ApplicationService]
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
    // private _router:Router,
    private _Activatedroute: ActivatedRoute
  ) {}
  // @Input() id: String;
  // @Input() siblings: [];

  ngOnInit() {
    this._id = this._Activatedroute.snapshot.paramMap.get('id');

    var application = this.applications;

    this.applicationService.getApplication(this._id).subscribe((data) => {
      this.applications = data;
      // console.log(data);
      // console.log(this.applications);
    });
  }

  // updateApplication(id) {
  //   const newApplication = {
  //     _id: this.id,
  //     school_name: this.school_name,
  //     first_name: this.first_name,
  //     last_name: this.last_name,
  //     phone: this.phone,
  //     email: this.email,
  //   };
  //   console.log(this.first_name);
  // }
  update(): void {
    const newupdateApplication = {
      // _id: this.applications._id,
     school_name: this.applications.school_name,
     first_name: this.applications.first_name,
     last_name: this.applications.last_name,
     phone: this.applications.phone,
     email: this.applications.email
    };
    this.applicationService
      .updateApplication(this._id, newupdateApplication)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        (error) => {
          console.log(error);
        }
      );
  //     console.log(this._id);
  // console.log(newupdateApplication + 'test');
  }
  
}


// getApplication(id: string) {
//   this.applicationService
//     .getApplication(id)
//     .subscribe((applications) => (this.applications = applications));
// }
