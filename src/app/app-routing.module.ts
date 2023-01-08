import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { RickComponent } from './rick/rick.component';
import { DataResolverService } from './services/data-resolver.service';

const routes: Routes = [
  {
    path: 'users', 
    loadChildren: ()=> import('./users/users.module').then((m) => m.UsersModule)
  },
  {
    path: 'orders', 
    //loadChildren: ()=> import('./orders/orders.module').then((m) => m.OrdersModule),
    component: OrdersComponent,
    resolve: {
      myData: DataResolverService
    }
  },
  {
    path: 'rick', 
    //loadChildren: ()=> import('./orders/orders.module').then((m) => m.OrdersModule),
    component: RickComponent,
    //loadChildren: () => import('./rick/rick.component').then((m)=> m.RickComponent),
    resolve: {
      rickData: DataResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
