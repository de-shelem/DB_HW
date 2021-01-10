import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Piglet} from '../models/piglet.model';
import {HttpClient} from '@angular/common/http';
import {Family} from '../models/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyService extends AbstractService<Family> {

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/Familys';
  }
}

