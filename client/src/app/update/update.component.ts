import { Component, OnInit } from '@angular/core';
import { Application } from 'express';
import { ApplicationService } from '../application.service';
// import { Application } from '../application';

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

  constructor(private applicationService: ApplicationService) {}


  updateApplication() {
    const newApplication = {
      school_name: this.school_name,
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
      email: this.email,
    }
    };
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
}
