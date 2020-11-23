import {getCompetitions} from '@services/CompetitionsService';
import {RootState} from '@store/Root/RootState';
import {AnyAction} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {setCompetitions, setLoading} from './slice';

export const fetchCompetitions = (): ThunkAction<
  void,
  RootState,
  null,
  AnyAction
> => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const response = await getCompetitions();

    if (response) {
      dispatch(setCompetitions({competition: response.items}));
    }
  } catch (exception) {}

  dispatch(setLoading(false));
};
