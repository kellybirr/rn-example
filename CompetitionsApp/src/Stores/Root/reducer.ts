import {combineReducers} from 'redux';
import CompetitionsReducer from '../Competitions/slice';
import {RootState} from './RootState';

const rootReducer = combineReducers<RootState>({
  competitions: CompetitionsReducer,
});

export default rootReducer;
