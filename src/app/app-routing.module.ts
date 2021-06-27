import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import("src/app/view/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import("src/app/view/profile/profile.module").then(m => m.ProfileModule)
  },
  {
    path: 'allBooks',
    loadChildren: () => import("src/app/view/all-books/all-books.module").then(m => m.AllBooksModule)
  },
  {
    path: 'bookDetails/:id',
    loadChildren: () => import("src/app/view/book-details/book-details.module").then(m => m.BookDetailsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
