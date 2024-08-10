'use client';

import axios, { AxiosRequestConfig } from 'axios';

export const AxiosFetch = (config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8080',
    ...config,
  });
};

export const WithCredential = (config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: process.env.API_URL || 'http://localhost:8080',
    withCredentials: true,
    ...config,
  });
};
