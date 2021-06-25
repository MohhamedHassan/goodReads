import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllBooksRoutingModule } from './all-books-routing.module';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllbooksComponent
  ],
  imports: [
    CommonModule,
    AllBooksRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AllBooksModule { }
