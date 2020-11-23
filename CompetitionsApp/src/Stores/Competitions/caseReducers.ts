import Competition from '@models/Competition/competition';
import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {CompetitionsState} from './CompetitionsState';

export const setCompetitionsCaseReducer: CaseReducer<
  CompetitionsState,
  PayloadAction<{competition: Competition[]}>
> = (state, action) => {
  state.competitionData = action.payload.competition;
};

export const setLoadingCaseReducer: CaseReducer<
  CompetitionsState,
  PayloadAction<boolean>
> = (state, action) => {
  state.loading = action.payload;
};
