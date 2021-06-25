import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotUserGuard } from 'src/app/guards/not-user.guard';
import { GetallbooksResolver } from 'src/app/resolvers/getallbooks.resolver';
import { AllbooksComponent } from './allbooks/allbooks.component';

const routes: Routes = [
  {
    path:'',
    component:AllbooksComponent,
    canActivate:[NotUserGuard],
    resolve:{AllBooks:GetallbooksResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllBooksRoutingModule { }
