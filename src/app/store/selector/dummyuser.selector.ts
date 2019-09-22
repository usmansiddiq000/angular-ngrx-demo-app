import { createSelector } from '@ngrx/store';

import { AppState } from '../../app.state';
import { DummyApi } from '../../models/dummyapi.model';


const DummyUser = (state: AppState) => state.DummyUser;

export const selectesdUser = createSelector(
    DummyUser,
    (state: DummyApi) => state
);