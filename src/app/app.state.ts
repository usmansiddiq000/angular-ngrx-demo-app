import { Toturial } from './models/toturial.models';
import { DummyUser } from './models/dummyuser.model';

export interface AppState {
    Toturial:Toturial[],
    DummyUser:DummyUser
}