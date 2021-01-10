import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {BoyPig} from '../models/boy-pig.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractService<T> {
  protected url: string;
  constructor(public http: HttpClient) { }

  public findAll(): Observable<T[]> {
    console.log(this.url);
    return this.http.get<T[]>(this.url);
  }

}
