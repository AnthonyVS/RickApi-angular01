import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RickComponent } from './pages/rick/rick.component';
import { DataResolverService } from './shared/services/data-resolver.service';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'rick', 
    loadChildren: ()=> import('./pages/rick/rick.module').then((m) => m.RickModule),
    component: RickComponent,
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
