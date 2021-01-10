import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {BoyPig} from '../models/boy-pig.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GirlPigService extends AbstractService<BoyPig>{

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/GirlPigs';
  }


}
