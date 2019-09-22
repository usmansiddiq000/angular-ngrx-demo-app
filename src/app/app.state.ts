import { Toturial } from './models/toturial.models';
import { DummyApi } from './models/dummyapi.model';

export interface AppState {
    Toturial:Toturial[],
    DummyUser:DummyApi
}