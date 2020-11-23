import {createSlice} from '@reduxjs/toolkit';
import {setCompetitionsCaseReducer} from './caseReducers';
import {CompetitionsInitialState} from './initialState';

const CompetitionsReducerSlice = createSlice({
  name: 'competitions',
  initialState: CompetitionsInitialState,
  reducers: {
    setCompetitions: setCompetitionsCaseReducer,
  },
});

export const {setCompetitions} = CompetitionsReducerSlice.actions;
export default CompetitionsReducerSlice.reducer;
