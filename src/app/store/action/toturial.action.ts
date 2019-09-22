import { Action } from '@ngrx/store';
import { Toturial } from '../../models/toturial.models';

export enum ToturialActions {
    ADD_TUTORIAL = '[TOTURIAL] Add',
    REMOVE_TUTORIAL = '[TOTURIAL] Remove'
}

export class AddTutorial implements Action {
    readonly type = ToturialActions.ADD_TUTORIAL;
    constructor(public payload:Toturial) {}
}

export class RemoveToturial implements Action {
    readonly type = ToturialActions.REMOVE_TUTORIAL;
    constructor(public payload:number) {}
}

export type Actions = AddTutorial | RemoveToturial;