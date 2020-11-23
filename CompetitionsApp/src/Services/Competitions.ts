import {axiosGetRequest} from './API/axios';

//this is a basic exemple for api call
export const getcompetitions = async (id: string) => {
  return axiosGetRequest(`/getcompetitions`, `&pid=${id}`);
};
