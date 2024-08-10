'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { allIssue } from './service/mocks/issue';
import { allNews } from './service/mocks/news';
import { allNotice } from './service/mocks/notice';
import { StyledYears } from './service/styles/Tag';
import { H1, H2 } from './service/styles/Text';
import { Issue } from './service/types/issue';

export default function Home() {
  const years: string[] = [
    '0000',
    ...Array.from({ length: 2024 - 1919 + 1 }, (_, index) =>
      (1919 + index).toString(),
    ),
  ];
  const [issue, setIssue] = useState<Issue>();
  const [currentYear, setCurrentYear] = useState('0000');

  useEffect(() => {
    const findIssues = allIssue.find(
      (issue) => issue.year == currentYear.toString(),
    );
    if (currentYear == '0000') setIssue(undefined);
    else if (!findIssues)
      toast.error(`${currentYear}년에는 현재 데이터가 없습니다.`);
    else setIssue(findIssues);
  }, [currentYear]);

  return (
    <div>
      <div className="overflow-x-scroll scrollbar-hide sm:h-[6rem] h-[5rem]">
        <StyledYears
          id="years"
          className="mx-auto text-stone-500 [writing-mode:vertical-lr]"
        >
          {years.map((year) => (
            <div
              onClick={() => {
                setCurrentYear(year);
              }}
              key={year}
              className={`${year == issue?.year.toString() ? 'text-3xl text-stone-700 font-black' : 'text-2xl'} font-bold no-touch:hover:font-black no-touch:hover:text-3xl no-touch:hover:text-stone-700 duration-150`}
            >
              {year}
            </div>
          ))}
        </StyledYears>
      </div>
      <div className="mb-10 border-b-2 border-neutral-600 py-1">
        <p className="font-medium text-lg">📣 {allNotice.at(0)}</p>
      </div>
      <div className="grid">
        {issue ? (
          <div className="w-full mx-auto">
            <H1>{`${issue.year}년, ${issue.history.length}개의 기록`}</H1>
            <div className="grid mt-8 md:grid-cols-2 grid-cols-1 gap-4">
              {issue.history.map((history, index) => (
                <div
                  className="rounded-lg border p-4 h-[15rem] border-neutral-500"
                  key={index}
                >
                  <H2>{history.name}</H2>
                  <p>{history.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className={'mb-5 gap-5 h-[40rem] grid md:grid-cols-3 grid-cols-1'}
          >
            <div className="grid gap-y-4">
              <div className="border p-4 rounded-lg border-neutral-500 divide-y divide-neutral-500">
                <div className="flex items-center my-2">
                  <p className="font-semibold text-2xl">최신 뉴스</p>
                  <Link className="ml-auto" href={'/news'}>
                    더보기 →
                  </Link>
                </div>
                <div className="grid gap-y-3 pt-5">
                  {allNews.slice(0, 3).map((news, index) => (
                    <div key={index}>
                      <h2 className="font-semibold">{news.name}</h2>
                      <p>{news.createdAt}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border p-4 divide-y divide-neutral-500 rounded-lg border-neutral-500">
                <div className="flex items-center my-2">
                  <p className="font-semibold text-2xl">커뮤니티</p>
                  <Link className="ml-auto" href={'/forum'}>
                    더보기 →
                  </Link>
                </div>
                <div className="grid gap-y-3 pt-5">
                  {allNews.slice(0, 3).map((news, index) => (
                    <div key={index}>
                      <p className="font-semibold">{news.name}</p>
                      <p>{news.createdAt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid col-span-1 md:col-span-2">
              <div>
                <H1>역사를 보존하다.</H1>
                <H1>Kolosseum 입니다.</H1>
                <div>
                  <p>현재 콜로세움은 베타 서비스입니다.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
