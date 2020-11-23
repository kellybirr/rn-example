import {delayedPromise} from './mock';
import {setCompetitions} from './slice';

export const fetchCompetitions = () => {
  return (dispatch: any) => {
    console.log('Store');
    delayedPromise()
      .then((data: any) => {
        console.log(data);
        dispatch(setCompetitions({competition: data.items}));
      })
      .catch((err) => console.log('err:', err));
  };
};
