import { DummyUser } from '../../models/dummyuser.model';
import { DummyUserActions, dummyuseractions } from '../action';

const InitialState:DummyUser =  {
    "userId": 10,
    "id": 10,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}


export function DummyUserReducer(state:DummyUser = InitialState, action:DummyUserActions) {
    switch(action.type) {
        case dummyuseractions.ADD_USER:
            return action.payload
        default:
            return state
    }
}