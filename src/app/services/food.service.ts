import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Feed} from '../models/feed.model';
import {HttpClient} from '@angular/common/http';
import {Food} from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService extends AbstractService<Food> {

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/FoodPigs';
  }
}
