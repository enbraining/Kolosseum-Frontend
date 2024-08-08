'use client';

import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from './cookie';

export const AxiosFetch = (config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8080',
    ...config,
  });
};

export const WithCredential = (config?: AxiosRequestConfig) => {
  const authToken = getCookie('Authorization');

  return axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8080',
    withCredentials: true,
    headers: {
      ...(authToken && { Authorization: authToken }),
    },
    ...config,
  });
};
