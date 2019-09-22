import { Action } from '@ngrx/store';
import { DummyApi } from '../../models/dummyapi.model';

export enum dummyapiactions {
    GET_USER = '[DUMMYAPI] GET',
    ADD_USER ='[DUMMYAPI] ADD'
}
export class GetDummyUser implements Action {
    readonly type = dummyapiactions.GET_USER;
    constructor(public payload:number) {}
}

export class AddDummyUser implements Action {
    readonly type = dummyapiactions.ADD_USER;
    constructor(public payload:DummyApi) {}
}



export type DummyApiActions = GetDummyUser | AddDummyUser;
