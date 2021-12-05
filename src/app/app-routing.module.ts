import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:() => import('./home-module/home.module').then(
      m => m.HomeModule
    )
  },
  {
    path:'vegetable',
    loadChildren:() => import('./vegetable-module/vegetable.module').then(
      m => m.VegetableModule
    )
  },
  {
    path:'about_us',
    loadChildren:() => import('./aboutUs-module/aboutUs.module').then(
      m => m.AboutUsModuleModule
    )
  },
  {
    path:'blog',
    loadChildren:() => import('./blog-module/blog-module.module').then(
      m => m.BlogModuleModule
    )
  },
  {
    path:'concact',
    loadChildren:() => import('./concact-module/concact-module.module').then(
      m => m.ConcactModuleModule
    )
  },
  {
    path:'wishlist',
    loadChildren:() => import('./history-module/history-module.module').then(
      m => m.HistoryModuleModule
    )
  },
  {
    path:'myacount',
    loadChildren:() => import('./myacount-module/myacount.module').then(
      m => m.MyacountModule
    )
  },
  {
    path:'checkout',
    loadChildren:() => import('./checkout-module/checkout-module.module').then(
      m => m.CheckoutModuleModule
    )
  },
  {
    path:'shoppingcart',
    loadChildren:() => import('./shoppingcart-module/shoppingcart-module.module').then(
      m => m.ShoppingcartModuleModule
    )
  },
  {
    path:'faq',
    loadChildren:() => import('./faq-module/faq-module.module').then(
      m => m.FaqModuleModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
