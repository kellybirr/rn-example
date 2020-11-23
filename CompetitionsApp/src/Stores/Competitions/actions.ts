import {delayedPromise} from './mock';
import {setCompetitions, setLoading} from './slice';

export const fetchCompetitions = () => {
  return (dispatch: any) => {
    dispatch(setLoading(true));

    delayedPromise()
      .then((data: any) => {
        dispatch(setCompetitions({competition: data.items}));
        dispatch(setLoading(false));
      })
      .catch((err) => console.log('err:', err));
  };
};
