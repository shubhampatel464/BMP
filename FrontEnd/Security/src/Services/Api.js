import Cookies from "js-cookie";
import { commonrequest } from "./common_request";
import { BACKEND_URL } from "./helper";

const user = JSON.parse(Cookies.get('user') || null);

export const postRequest = async (endpoint, data, headers = {}, params = {}) => {

    try {
        const response = await commonrequest("POST", `${BACKEND_URL}/${endpoint}`, data, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in POST request to ${endpoint}`);
    }
};

export const postRequestWithToken = async (endpoint, data, headers = {}, params = {}) => {
    const token = user?.token;
    if (!token) {
        throw new Error('No token found');
    }
    headers['Authorization '] = token;
    // headers['Content-Type'] = 'application/json';
    try {
        const response = await commonrequest("POST", `${BACKEND_URL}/${endpoint}`, data, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in POST request to ${endpoint}`);
    }
}

export const getRequest = async (endpoint, params = {}) => {
    const token = user?.token;
    if (!token) {
        alert('Please login to access this page');
        window.location.href = `/home`;
        // throw new Error('No token found');
    }
    const headers = {};
    headers['Authorization '] = token;
    headers['Content-Type'] = 'application/json';

    try {
        const response = await commonrequest("GET", `${BACKEND_URL}/${endpoint}`, {}, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in GET request to ${endpoint}`);
    }
};