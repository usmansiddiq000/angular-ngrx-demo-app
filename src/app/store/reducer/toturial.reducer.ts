import { Toturial } from '../../models/toturial.models';
import { ToturialActions, Actions } from '../action';


const InitialState:Toturial = {
    name : 'initial name',
    url: 'Google.com'
}

export function ToturialReducer(state: [Toturial] = [InitialState], action:Actions) {
    switch(action.type) {
        case ToturialActions.ADD_TUTORIAL:
            return [action.payload, ...state]

        case ToturialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1);
            return state
            
        default :
            return state
    }
}