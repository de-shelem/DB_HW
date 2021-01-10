import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoyPig} from '../models/boy-pig.model';
import {AbstractService} from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class BoyPigService extends AbstractService<BoyPig>{

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/BoyPigs';
  }


}
