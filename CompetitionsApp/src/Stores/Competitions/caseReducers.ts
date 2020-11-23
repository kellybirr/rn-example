import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import Competition from '@models/Competition/competition';
import {CompetitionsState} from './CompetitionsState';

export const setCompetitionsCaseReducer: CaseReducer<
  CompetitionsState,
  PayloadAction<{competition: Competition[]}>
> = (state, action) => {
  console.log('State', action.payload.competition);
  state.competitionData = action.payload.competition;
};
