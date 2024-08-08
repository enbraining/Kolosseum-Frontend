'use client';

import { H1 } from '@/app/styled/Text';
import { AxiosFetch } from '@/app/utils/axios';
import { setCookie } from '@/app/utils/cookie';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../../layout/Layout';

type Inputs = {
  email: string;
  password: string;
};

export default function Page() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = (await AxiosFetch()
      .post('/auth/login', {
        email: data.email,
        password: data.password,
      })
      .catch((reason: any) =>
        toast.error(reason.response.data.message),
      )) as AxiosResponse;

    if (response.status == 200) {
      setCookie('Authorization', 'Bearer ' + response.data.access_token);
      router.push('/');
      router.refresh();
    }
  };

  return (
    <Layout>
      <div className="grid min-h-[50vh]">
        <div className="m-auto md:w-1/3 w-3/4 grid gap-y-5">
          <div className="flex items-center">
            <H1>로그인</H1>
            <Link href={'/auth/join'} className="ml-auto">
              회원가입으로 가기
            </Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-y-4">
              <input
                {...register('email')}
                type="email"
                className="py-2 border-b-2 border-b-neutral-500 bg-[#00000000] outline-none"
                placeholder="email"
              ></input>
              <input
                {...register('password')}
                type="password"
                className="py-2 border-b-2 border-b-neutral-500 bg-[#00000000] outline-none"
                placeholder="password"
              ></input>
            </div>
            <button className="px-3 py-2 rounded-xl text-left mt-8 hover:bg-[#CAC4B4] bg-[#EBE7DB] border border-neutral-300">
              계속하기 →
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
