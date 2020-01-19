import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsMenuPage } from './tabs-menu.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsMenuPage,
    children: [
      {
        path: 'home',
        children: [
          {
              path: '',
              loadChildren: () => import('../tabs/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'library',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/library/library.module').then(m => m.LibraryPageModule)
          }
        ]
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/shop/shop.module').then(m => m.ShopPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsMenuPageRoutingModule {}