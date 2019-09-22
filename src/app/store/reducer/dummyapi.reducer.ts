import { DummyApi } from '../../models/dummyapi.model';
import { DummyApiActions, dummyapiactions } from '../action';

const InitialState:DummyApi =  {
    "userId": 10,
    "id": 10,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}


export function DummyApiReducer(state:DummyApi = InitialState, action:DummyApiActions) {
    switch(action.type) {
        case dummyapiactions.ADD_USER:
            return action.payload
        default:
            return state
    }
}