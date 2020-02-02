import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//Add custom component below and into the exports and the declaration
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports : [
    ProductItemComponent
  ]
})
export class ComponentsModule { }
