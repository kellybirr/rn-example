import {RootState} from '../Root/RootState';

export const getCompetitionsState = (state: RootState) => state.competitions.competitionData;
export const getLoadingState = (state: RootState) => state.competitions.loading;
