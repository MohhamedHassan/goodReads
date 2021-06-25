import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPipe } from './text.pipe';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    TextPipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[TextPipe,SearchPipe]
})
export class SharedModule { }
