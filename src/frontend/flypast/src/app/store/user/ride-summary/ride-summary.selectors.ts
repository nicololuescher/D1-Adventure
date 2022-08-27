import { createSelector } from '@ngrx/store';

import { UserState } from '../user.reducer';
import { userSelector } from '../user.selectors';
import {RideSummaryState} from "./ride-summary.reducer";
import {RideSummary} from "../../../interfaces/ride-summary.interface";

const getRideSummaryState = createSelector(userSelector, (state: UserState): RideSummaryState => {
    return state['rideSummary'];
});

const getRideSummary = createSelector(getRideSummaryState, (state: RideSummaryState): RideSummary => {
    return state.rideSummary;
});

export const rideSummarySelectors = {
    getRideSummary
};
