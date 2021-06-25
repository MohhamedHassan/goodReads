import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotUserGuard } from 'src/app/guards/not-user.guard';
import { GetUserBooksResolver } from 'src/app/resolvers/get-user-books.resolver';
import { ProfileResolver } from 'src/app/resolvers/profile.resolver';
import { AddBookComponent } from './add-book/add-book.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path:'',
    component:MyProfileComponent,
    canActivate:[NotUserGuard],
    resolve:{profile:ProfileResolver},
    children:[
      {
        path:'myBooks',
        component:MyBooksComponent,
        resolve:{myBooks:GetUserBooksResolver}
      },
      {
        path:'addBook',
        component:AddBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
