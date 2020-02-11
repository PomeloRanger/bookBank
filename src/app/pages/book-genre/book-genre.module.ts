import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookGenrePageRoutingModule } from './book-genre-routing.module';
import { BookGenrePage } from './book-genre.page';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BookGenrePageRoutingModule,
  ],
  declarations: [BookGenrePage]
})
export class BookGenrePageModule {}
