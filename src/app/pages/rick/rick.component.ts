import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RickClases } from './interfaces/rick.interface';
import { RickService } from './services/rick.service';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})

export class RickComponent implements OnInit{
  public rick$!: Observable<RickClases>;
  constructor(private readonly rickSvc: RickService) {}

  ngOnInit(): void{
    this.rick$ = this.rickSvc.rickClases$;
  }

}
