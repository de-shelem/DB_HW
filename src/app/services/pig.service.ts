import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Pig} from '../models/pig.model';

@Injectable({
  providedIn: 'root'
})
export class PigService  extends AbstractService<Pig> {

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/Pigs';
  }
}

