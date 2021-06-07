import { Component, OnInit, Input } from '@angular/core';
import { Application, Router } from 'express';
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
  id: string;
  school_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;

  constructor(
    private applicationService: ApplicationService,
    // private _router:Router,
    private _Activatedroute: ActivatedRoute
  ) {}
  // @Input() id: String;
  // @Input() siblings: [];

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");

    var application = this.applications;

    this.applicationService
      .getApplication(this.id)
      .subscribe(data => {this.applications = data;
    //  console.log(data);   
      });
    }

  updateApplication() {
    //   const newApplication = {
    //     school_name: this.school_name,
    //     first_name: this.first_name,
    //     last_name: this.last_name,
    //     phone: this.phone,
    //     email: this.email,
  }
}



// getApplication(id: string) {
//   this.applicationService
//     .getApplication(id)
//     .subscribe((applications) => (this.applications = applications));
// }
