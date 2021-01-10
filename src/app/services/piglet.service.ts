import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Pig} from '../models/pig.model';
import {HttpClient} from '@angular/common/http';
import {Piglet} from '../models/piglet.model';

@Injectable({
  providedIn: 'root'
})
export class PigletService  extends AbstractService<Piglet> {

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/Piglets';
  }
}
