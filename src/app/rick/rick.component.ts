import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dataservice } from '../services/data.service';
import { RickClases } from './interfaces/rick.interface';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})

export class RickComponent implements OnInit{

  private readonly route = inject(ActivatedRoute);
  public rick!: RickClases;
  public baseUrl='https://rickandmortyapi.com/api/character/avatar/';

  ngOnInit(): void{
    this.route.data.subscribe(({rickData}) => {
      console.log(rickData);
      this.rick  = rickData;
    });
  }

}
