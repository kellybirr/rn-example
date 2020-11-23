import axios from 'axios';
import { Config } from '../../Config';

export const GENERIC_ERROR = "generic_error";

export default axios.create({
    baseURL: Config.API_URL,
});
