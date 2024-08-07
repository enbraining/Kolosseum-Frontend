'use client';

import Link from 'next/link';
import Layout from '../layout/Layout';
import { StyledInput } from '../styled/Tag';
import { H1 } from '../styled/Text';

export default function Page() {
  const mocks = [
    {
      name: '대충 고구려 어쩌고 관련된 글',
      createdAt: '2024월 12월 12일',
      id: 1,
    },
    {
      name: '대충 고구려 어쩌고 관련된 글',
      createdAt: '2024월 12월 12일',
      id: 2,
    },
    {
      name: '대충 고구려 어쩌고 관련된 글',
      createdAt: '2024월 12월 12일',
      id: 3,
    },
    {
      name: '대충 고구려 어쩌고 관련된 글',
      createdAt: '2024월 12월 12일',
      id: 4,
    },
  ];

  return (
    <Layout>
      <div className="grid mt-20">
        <div className="mx-auto w-4/5">
          <div className="grid grid-cols-3 items-center">
            <div>
              <H1>커뮤니티</H1>
            </div>
            <div className="w-full" />
            <StyledInput placeholder="검색하기" className="ml-auto" />
          </div>
          <div className="mt-10 grid">
            {mocks.map((mock) => (
              <Link
                href={`/forum/${mock.id}`}
                className="border-t flex border-t-neutral-400 py-2 items-center"
                key={mock.id}
              >
                <h2>{mock.name}</h2>
                <p className="ml-auto text-sm">{mock.createdAt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
