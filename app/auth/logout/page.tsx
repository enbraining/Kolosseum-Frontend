'use client';

import { removeCookie } from '@/app/utils/cookie';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  removeCookie('Authorization');
  router.push('/');

  return <main></main>;
}
