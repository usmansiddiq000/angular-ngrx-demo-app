import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Effect, ofType, Actions, act } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { dummyapiactions, GetDummyUser, AddDummyUser } from '../action'
import { UserService } from '../../service/user.service';


@Injectable()
export class UserEffects {
    constructor(
        private _userService: UserService,
        private _actions$: Actions,
      ) {}

@Effect({dispatch: true})
getUsers$ : Observable<Action> = this._actions$.pipe(
    ofType(dummyapiactions.GET_USER),
    switchMap((action:any) => {
        return this._userService
        .getUsers(action.payload)
        .pipe(map(data => {
            return new AddDummyUser(data)
        }))
    }
    )
  );


}
