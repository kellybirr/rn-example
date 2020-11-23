import {createSlice} from '@reduxjs/toolkit';
import {setCompetitionsCaseReducer,setLoadingCaseReducer} from './caseReducers';
import {CompetitionsInitialState} from './initialState';

const CompetitionsReducerSlice = createSlice({
  name: 'competitions',
  initialState: CompetitionsInitialState,
  reducers: {
    setCompetitions: setCompetitionsCaseReducer,
    setLoading: setLoadingCaseReducer,
  },
});

export const {setCompetitions,setLoading} = CompetitionsReducerSlice.actions;
export default CompetitionsReducerSlice.reducer;
