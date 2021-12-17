import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path:'',
    component:ClientComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        loadChildren:() => import('./client/pages/home-module/home.module').then(
          m => m.HomeModule
        )
      },
      {
        path:'vegetable',
        loadChildren:() => import('./client/pages/vegetable-module/product.module').then(
          m => m.VegetableModule
        )
      },
      {
        path:'about_us',
        loadChildren:() => import('./client/pages/aboutUs-module/aboutUs.module').then(
          m => m.AboutUsModuleModule
        )
      },
      {
        path:'blog',
        loadChildren:() => import('./client/pages/blog-module/blog-module.module').then(
          m => m.BlogModuleModule
        )
      },
      {
        path:'concact',
        loadChildren:() => import('./client/pages/concact-module/concact-module.module').then(
          m => m.ConcactModuleModule
        )
      },
      {
        path:'wishlist',
        loadChildren:() => import('./client/pages/history-module/history-module.module').then(
          m => m.HistoryModuleModule
        )
      },
      {
        path:'myacount',
        loadChildren:() => import('./client/pages/myacount-module/myacount.module').then(
          m => m.MyacountModule
        )
      },
      {
        path:'checkout',
        loadChildren:() => import('./client/pages/checkout-module/checkout-module.module').then(
          m => m.CheckoutModuleModule
        )
      },
      {
        path:'shoppingcart',
        loadChildren:() => import('./client/pages/shoppingcart-module/shoppingcart-module.module').then(
          m => m.ShoppingcartModuleModule
        )
      },
      {
        path:'faq',
        loadChildren:() => import('./client/pages/faq-module/faq-module.module').then(
          m => m.FaqModuleModule
        )
      },
    ]
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {
        path:"addproduct",
        loadChildren:() => import('./admin/pages/addPrd-module/add-product.module').then(
          m => m.AddProductModule
        )
      },
      {
        path:"listproduct",
       loadChildren:() => import('./admin/pages/listPrd-module/list-product.module').then(
         m => m.ListProductModule
       )
      },
      {
        path:"category",
        loadChildren:() => import('./admin/pages/category-module/category.module').then(
          m => m.CategoryModule
        )
      },
      {
        path:"order",
        loadChildren:() => import('./admin/pages/order-module/order-module.module').then(
          m => m.OrderModuleModule
        )
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
