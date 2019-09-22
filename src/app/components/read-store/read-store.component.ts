import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Toturial } from '../../models/toturial.models';
import { RemoveToturial } from '../../store/action';


@Component({
  selector: 'app-read-store',
  templateUrl: './read-store.component.html',
  styleUrls: ['./read-store.component.css']
})
export class ReadStoreComponent implements OnInit {

  tutorials: Observable<Toturial[]>;

  constructor(private _store:Store<AppState>) { 
    this.tutorials = this._store.select('Toturial');
  }

  ngOnInit() {
  }

  delTutorial(index) {
    this._store.dispatch(new RemoveToturial(index))
  }

}
