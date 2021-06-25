import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotUserGuard } from 'src/app/guards/not-user.guard';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path:'',
    component:BookdetailsComponent,
    canActivate:[NotUserGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailsRoutingModule { }
