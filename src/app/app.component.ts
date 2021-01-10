import {Component, OnInit} from '@angular/core';
import {BoyPigService} from './services/boy-pig.service';
import {PigService} from './services/pig.service';
import {BoyPig} from './models/boy-pig.model';
import {Pig} from './models/pig.model';
import {GraftService} from './services/graft.service';
import {PiggyService} from './services/piggy.service';
import {Piggy} from './models/piggy.model';
import {Graft} from './models/graft.model';
import {GirlPig} from './models/girl-pig.model';
import {GirlPigService} from './services/girl-pig.service';
import {Family} from './models/family.model';
import {Piglet} from './models/piglet.model';
import {FamilyService} from './services/family.service';
import {PigletService} from './services/piglet.service';
import {Feed} from './models/feed.model';
import {Food} from './models/food.model';
import {Months} from './models/months.model';
import {FeedService} from './services/feed.service';
import {FoodService} from './services/food.service';
import {MonthsService} from './services/months.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HWClient';

  boyPigColumns: string[] = ['idBoyPig', 'idPig'];
  girlPigColumns: string[] = ['idGirlPig', 'idPig'];
  familyPigColumns: string[] = ['idFamily', 'idPiglet', 'idGirlPig', 'idBoyPig'];
  pigletColumns: string[] = ['idPiglet', 'idPig', 'dateOfBirth'];
  graftPigColumns: string[] = ['idGraft', 'graftOne', 'graftTwo', 'graftTree'];
  piggyPigColumns: string[] = ['idPiggy', 'fio'];
  monthColumns: string[] = ['idMonths',
    'nameOfTheMonth'];
  foodPigColumns: string[] = ['idFoodPig',
    'feedConsumption',
    'pigWeight',
    'idFeed',
    'idMonths',
    'idPig'];
  feedPigColumns: string[] = ['idFeed',
    'feedType'];
  pigColumns: string[] = ['idPig',
    'nicknamePig',
    'agePig',
    'appointment',
    'idPiggy',
    'idGraft'];

  boyPigs: BoyPig[] = [];
  pigs: Pig[] = [];
  piggys: Piggy[] = [];
  grafts: Graft[] = [];
  girlPigs: GirlPig[] = [];
  families: Family[] = [];
  piglets: Piglet[] = [];
  feed: Feed[] = [];
  food: Food[] = [];
  month: Months[] = [];
  constructor(private boyPigService: BoyPigService,
              private girlPigService: GirlPigService,
              private pigService: PigService,
              private piggyService: PiggyService,
              private graftService: GraftService,
              private familyService: FamilyService,
              private pigletService: PigletService,
              private feedService: FeedService,
              private foodService: FoodService,
              private monthService: MonthsService) {
  }


  ngOnInit(): void {
    this.boyPigService.findAll().subscribe(value => {
      console.log(value);
      this.boyPigs = value;
    });
    this.girlPigService.findAll().subscribe(value => {
      console.log(value);
      this.girlPigs = value;
    });
    this.pigService.findAll().subscribe(value => {
      console.log(value);
      this.pigs = value;
    });
    this.graftService.findAll().subscribe(value => {
      console.log(value);
      this.grafts = value;
    });
    this.piggyService.findAll().subscribe(value => {
      console.log(value);
      this.piggys = value;
    });
    this.familyService.findAll().subscribe(value => {
      console.log(value);
      this.families = value;
    });
    this.pigletService.findAll().subscribe(value => {
      console.log(value);
      this.piglets = value;
    });
    this.feedService.findAll().subscribe(value => {
      console.log(value);
      this.feed = value;
    });
    this.foodService.findAll().subscribe(value => {
      console.log(value);
      this.food = value;
    });
    this.monthService.findAll().subscribe(value => {
      console.log(value);
      this.month = value;
    });
  }
}
