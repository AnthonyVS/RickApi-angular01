import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickRoutingModule } from './rick-routing.module';
import { RickComponent } from './rick.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RickInterceptor } from './interceptors/rick.interceptor';



@NgModule({
  declarations: [RickComponent],
  imports: [
    CommonModule, 
    RickRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RickInterceptor, multi: true}
  ]
})
export class RickModule { }
