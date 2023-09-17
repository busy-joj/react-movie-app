import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClinet = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        "Content-Type": "appliction/json",
    },
    paramsSerializer: (params) =>
        queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

axiosClinet.interceptors.request.use(async (config) => config);
axiosClinet.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClinet;
