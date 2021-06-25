import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/guards/user.guard';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    canActivate:[UserGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    canActivate:[UserGuard]
  },
  {
    path:'signup',
    component:SignUpComponent,
    canActivate:[UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
