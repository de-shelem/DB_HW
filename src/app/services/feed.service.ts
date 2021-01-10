import { Injectable } from '@angular/core';
import {AbstractService} from './abstract.service';
import {Family} from '../models/family.model';
import {HttpClient} from '@angular/common/http';
import {Feed} from '../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends AbstractService<Feed> {

  constructor(public http: HttpClient) {
    super(http);
    this.url = 'http://localhost:8080/Feeds';
  }
}
