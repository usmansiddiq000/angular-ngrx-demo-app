import { Action } from '@ngrx/store';
import { DummyUser } from '../../models/dummyuser.model';

export enum dummyuseractions {
    GET_USER = '[DUMMYUSER] GET',
    ADD_USER ='[DUMMYUSER] ADD'
}
export class GetDummyUser implements Action {
    readonly type = dummyuseractions.GET_USER;
    constructor(public payload:number) {}
}

export class AddDummyUser implements Action {
    readonly type = dummyuseractions.ADD_USER;
    constructor(public payload:DummyUser) {}
}



export type DummyUserActions = GetDummyUser | AddDummyUser;
