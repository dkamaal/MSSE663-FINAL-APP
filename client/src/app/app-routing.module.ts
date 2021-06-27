import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'applications', component: ApplicationsComponent},
  {path: 'update/:id', component: UpdateComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
