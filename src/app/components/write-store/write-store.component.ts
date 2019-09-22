import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { AddTutorial } from '../../store/action';

@Component({
  selector: 'app-write-store',
  templateUrl: './write-store.component.html',
  styleUrls: ['./write-store.component.css']
})
export class WriteStoreComponent implements OnInit {

  inputForm:FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _store:Store<AppState>
    ) { 
    this.inputForm = this._fb.group({
      'name' : [null, Validators.required],
      'url': [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  AddToStore(form:FormGroup) {
    let name = form.value.name
    let url = form.value.url;
    this.inputForm.reset();
    this._store.dispatch(new AddTutorial({name:name, url:url}))
  }

}
