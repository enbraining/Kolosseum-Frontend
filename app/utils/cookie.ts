'use server';

import { cookies } from 'next/headers';

export const setCookie = (key: string, value: string) => {
  cookies().set(key, value);
};

export const isValidate = () => {
  const authorization = cookies().get('Authorization');
  return authorization ? true : false;
};
