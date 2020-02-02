import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs-menu/tabs-menu.module').then( m => m.TabsMenuPageModule)
  },
  {
    
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'author-detail',
    loadChildren: () => import('./pages/author-detail/author-detail.module').then( m => m.AuthorDetailPageModule)
  },
  {
    path: 'book-genre',
    loadChildren: () => import('./pages/book-genre/book-genre.module').then( m => m.BookGenrePageModule)
  },
  {
    path: 'book-detail/:id',
    loadChildren: () => import('./pages/book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
