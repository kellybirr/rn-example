import {Config} from '../../Config';
import axios from '../API/api';
import {getStorageItem, SESSION_TOKEN, setStorageItem} from '../AsyncStorage';

const readToken = async (tokenNeeded: boolean = true) => {
  const token = await getStorageItem(SESSION_TOKEN);

  return token;
};

/**
 * AXIOS Get request
 * - url: the relative endpoint url e.g category/getCategories
 * - tokenNeeded: Optional parameter, with a default value = TRUE. It should pe used only for endoints that work without authorization (access token )
 */
export const axiosGetRequest = async <T>(
  url: string,
  optionalQueryParams: string,
  tokenNeeded: boolean = true,
): Promise<T> => {
  const sessionToken = await readToken(tokenNeeded);
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url:
        url +
        `?app_key=${Config.APP_KEY}` +
        optionalQueryParams +
        `&session_token=${sessionToken}`,
      headers: {Accept: 'application/json'},
    })
      .then((response) => {
        console.log(response.request);
        let parsedResponse = JSON.parse(response.data);
        refreshSessionToken(parsedResponse);
        resolve(parsedResponse);
      })
      .catch((error) => {
        if (error && error.response && error.response.data) {
          reject(error.response.data);
        }
      });
  });
};

/**
 * AXIOS POST request
 * - url: the relative endpoint url e.g category/getCategories
 * - data: the body object
 * - tokenNeeded: Optional parameter, with a default value = TRUE. It should pe used only for endoints that work without authorization (access token )
 */
export const axiosPostRequest = async <T1, T2>(
  url: string,
  optionalQueryParams: string,
  data: T1,
  tokenNeeded: boolean = true,
): Promise<T2> => {
  const sessionToken = await readToken(tokenNeeded);
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url:
        url +
        `?app_key=${Config.APP_KEY}` +
        optionalQueryParams +
        `&session_token=${sessionToken}`,
      data: data,
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => {
        refreshSessionToken(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log('error ', error.response);
        reject(error.response.data);
      });
  });
};

/**
 * Read session token from the AuthenticationToken response key or NewUserKey
 * this is refreshing the session key
 * @param parsedResponse
 */
function refreshSessionToken(parsedResponse: any) {
  let sessionToken = undefined;
  if (parsedResponse.Result) {
    sessionToken = parsedResponse.Result.AuthenticationToken;
  }
  let updatedSessionToken = parsedResponse.NewUserKey;

  if (sessionToken) {
    setStorageItem(SESSION_TOKEN, sessionToken);
    return;
  }
  if (updatedSessionToken) {
    setStorageItem(SESSION_TOKEN, updatedSessionToken);
  }
}
