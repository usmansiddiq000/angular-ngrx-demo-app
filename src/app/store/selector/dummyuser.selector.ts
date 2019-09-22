import { createSelector } from '@ngrx/store';

import { AppState } from '../../app.state';
import { DummyUser } from '../../models/dummyuser.model';

const DummyUser = (state: AppState) => state.DummyUser;

export const selectesdUser = createSelector(
    DummyUser,
    (state: DummyUser) => state
);