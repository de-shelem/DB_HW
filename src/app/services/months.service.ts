import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Feed} from '../models/feed.model';
import {HttpClient} from '@angular/common/http';
import {Months} from '../models/months.model';

@Injectable({
  providedIn: 'root'
})
export class MonthsService extends AbstractService<Months> {

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/Months';
  }
}
