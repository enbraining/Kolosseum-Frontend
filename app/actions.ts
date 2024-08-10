'use server';

import axios from 'axios';
import { cookies } from 'next/headers';

export const setCookie = async (key: string, value: string, expires: Date) => {
  cookies().set(key, value, { expires: expires });
};

export const getCookie = async (key: string) => {
  return cookies().get(key)?.value as string | null;
};

export const removeCookie = async (key: string) => {
  return cookies().delete(key);
};

export async function createUser(event: FormData) {
  const email = event.get('email')?.toString()!;
  const password = event.get('password')?.toString()!;

  await axios.post('http://localhost:8080/auth/join', {
    email: email,
    password: password,
  });
}
