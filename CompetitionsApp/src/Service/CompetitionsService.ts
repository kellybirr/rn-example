import {axiosGetRequest} from './API/axios';
import {delayedPromise} from './mock';

//this is a basic exemple for api call
export const getCompetitionsExemple = async (id: string) => {
  return axiosGetRequest(`/getcompetitions`, `&pid=${id}`);
};

export const getCompetitions = async () => {
  return await delayedPromise()
    .then((data: any) => {
      return data;
    })
    .catch((err) => console.log('err:', err));
};
