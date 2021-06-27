// import "mocha";
// import { expect } from "chai";
// import { ApplicationsComponent, getSchoolDetail() } from "./applications.component";


// describe("ApplicationComponent", () => {    
//   it("is successfully instantiatied", () => {
//     expect(getSchoolDetail(80129)).to.equal(true);
//   });
// });



// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ApplicationsComponent } from './applications.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         ApplicationsComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(ApplicationsComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'client'`, () => {
//     const fixture = TestBed.createComponent(ApplicationsComponent);
//     const app = fixture.componentInstance;
//     expect(app.msg).toEqual('No School available');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(ApplicationsComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain('client app is running!');
//   });
// });