import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//Add custom component below and into the exports and the declaration
import { BookItemComponent } from './book-item/book-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BookItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports : [
    BookItemComponent
  ]
})
export class ComponentsModule { }
