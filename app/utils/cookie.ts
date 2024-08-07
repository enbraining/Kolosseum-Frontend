'use server';

import { cookies } from 'next/headers';

export const setCookie = (key: string, value: string) => {
  cookies().set(key, value);
};

export const getCookie = (key: string) => {
  return cookies().get('Authorization')?.value;
};

export const removeCookie = (key: string) => {
  return cookies().delete(key);
};
