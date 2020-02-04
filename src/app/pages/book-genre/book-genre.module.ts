import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookGenrePageRoutingModule } from './book-genre-routing.module';
import { BookGenrePage } from './book-genre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookGenrePageRoutingModule,
  ],
  declarations: [BookGenrePage]
})
export class BookGenrePageModule {}
