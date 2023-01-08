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
  //private readonly API = 'https://restcountries.com/v2/regionalbloc/usan'; 
  //private readonly API = 'https://rickandmortyapi.com/api/character/1';
  //private readonly API = 'https://rickandmortyapi.com/api';
  private readonly API_URL = enviroment.api;

  resolve(): Observable<unknown>  {
    //return this.http.get(this.API); 

    return this.http.get(
      `${enviroment.api}`
      );
  }

  /*
  const lat = '40.730610';
      const lon = '-73.935242';
      return this.http.get(
        `${enviroment.api}?lat=${lat}&lon=${lon}&appid=${enviroment.key}`
      );*/

}
