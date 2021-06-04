import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: '', component: ApplicationsComponent},
  {path: 'update/:id', component: UpdateComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
