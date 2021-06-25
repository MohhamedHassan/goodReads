import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookDetailsRoutingModule } from './book-details-routing.module';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';


@NgModule({
  declarations: [
    BookdetailsComponent
  ],
  imports: [
    CommonModule,
    BookDetailsRoutingModule
  ]
})
export class BookDetailsModule { }
