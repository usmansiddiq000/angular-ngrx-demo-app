import { ToturialReducer } from './toturial.reducer';
import { DummyApiReducer } from './dummyapi.reducer';
import { AppState } from '../../app.state'


export const Reducers = {
    Toturial: ToturialReducer,
    DummyUser:DummyApiReducer

  }

export const getDummyUser = (state: AppState) => { debugger; return state.DummyUser}