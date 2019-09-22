import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { DummyApi } from '../models/dummyapi.model'
import { GetDummyUser } from '../store/action';
import { selectesdUser } from '../store/selector/dummyuser.selector';

@Component({
  selector: 'app-effect-component',
  templateUrl: './effect-component.component.html',
  styleUrls: ['./effect-component.component.css']
})
export class EffectComponentComponent implements OnInit {
  dummyUser;

  constructor(private _store:Store<AppState>) { 
    this._store.pipe(select(selectesdUser))
    .subscribe(data => { console.log(data); this.dummyUser = data});
  }

  ngOnInit() {
  }

  GetCurrencyRate() {

    this._store.dispatch(new GetDummyUser(Math.floor((Math.random() * 10) + 1)))
  }

}
