import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})

export class DataResolverService implements Resolve<unknown>{
  private readonly http = inject(HttpClient);

  resolve(): Observable<unknown>  {
    const name = 'rick';
    console.log('Parte 1: '+ `${enviroment.api}?name=${name}`);
    return this.http.get(
      `${enviroment.api}?name=${name}`
      );
  }

}
