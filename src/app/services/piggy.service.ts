import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Graft} from '../models/graft.model';
import {HttpClient} from '@angular/common/http';
import {Piggy} from '../models/piggy.model';

@Injectable({
  providedIn: 'root'
})
export class PiggyService extends AbstractService<Piggy>{

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/Piggys';
  }


}
