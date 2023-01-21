import { Subject } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RickClases } from '../interfaces/rick.interface';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class RickService {
  private readonly http = inject(HttpClient);
  rickClases$ = new Subject<RickClases>();

  constructor() {
    this.getCharacterByName();
  }

  setData(data: RickClases): void {
    this.rickClases$.next(data);
  }

  getCharacterByName(chr = 'Rick'): void {
    console.log(`${enviroment.api}?name=${chr}`);

    this.http
      .get<RickClases>(`${enviroment.api}?name=${chr}`)
      .subscribe((value: RickClases) => {
        this.setData(value);
      });
  }
}
