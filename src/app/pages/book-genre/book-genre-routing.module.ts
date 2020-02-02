import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookGenrePage } from './book-genre.page';

const routes: Routes = [
  {
    path: '',
    component: BookGenrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookGenrePageRoutingModule {}
