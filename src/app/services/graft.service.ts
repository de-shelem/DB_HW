import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {BoyPig} from '../models/boy-pig.model';
import {HttpClient} from '@angular/common/http';
import {Graft} from '../models/graft.model';

@Injectable({
  providedIn: 'root'
})
export class GraftService extends AbstractService<Graft>{

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/Grafts';
  }


}
