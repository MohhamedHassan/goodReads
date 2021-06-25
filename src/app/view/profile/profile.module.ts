import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MyBooksComponent } from './my-books/my-books.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    MyProfileComponent,
    AddBookComponent,
    MyBooksComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ModalModule.forRoot()
  ]
})
export class ProfileModule { }
