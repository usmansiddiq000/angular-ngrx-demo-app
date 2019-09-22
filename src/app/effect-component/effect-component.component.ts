import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { DummyUser } from '../models/dummyuser.model'
import { GetDummyUser } from '../store/action';
import { selectesdUser } from '../store/selector/dummyuser.selector';

@Component({
  selector: 'app-effect-component',
  templateUrl: './effect-component.component.html',
  styleUrls: ['./effect-component.component.css']
})
export class EffectComponentComponent implements OnInit {
  dummyUser:Object;

  constructor(private _store:Store<AppState>) { 
    this._store.pipe(select(selectesdUser))
    .subscribe(data => { console.log(data); this.dummyUser = data});
    // this._store.select('DummyUser')
    // .subscribe(f => console.log(f))  //can also use this one, instead of creating selector or method in readComponent
  }

  ngOnInit() {
  }

  GetCurrencyRate() {
    let index = Math.floor((Math.random() * 10) + 1) 
    this._store.dispatch(new GetDummyUser(index))
  }

}
