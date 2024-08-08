'use server';

import axios from 'axios';

export async function createUser(event: FormData) {
  const email = event.get('email')?.toString()!;
  const password = event.get('password')?.toString()!;

  await axios.post('http://localhost:8080/auth/join', {
    email: email,
    password: password,
  });
}
