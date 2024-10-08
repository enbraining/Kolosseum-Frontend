'use client';

import About from '@/components/main/About';
import { default as BoardList } from '@/components/main/BoardList';
import IssueList from '@/components/main/IssueList';
import NewsList from '@/components/main/NewsList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { allIssue } from './service/mocks/issue';
import { allNotice } from './service/mocks/notice';
import { StyledYears } from './service/styles/Tag';
import { Issue } from './service/types/issue';

export default function Home() {
  const years: string[] = [
    '0000',
    ...Array.from({ length: 2024 - 1919 + 1 }, (_, index) =>
      (1919 + index).toString(),
    ),
  ];
  const [issue, setIssue] = useState<Issue | null>(null);
  const [currentYear, setCurrentYear] = useState('0000');

  useEffect(() => {
    const findIssues = allIssue.find(
      (issue) => issue.year == currentYear.toString(),
    );
    if (currentYear == '0000') setIssue(null);
    else if (!findIssues)
      toast.error(`${currentYear}년에는 현재 데이터가 없습니다.`);
    else setIssue(findIssues);
  }, [currentYear]);

  return (
    <div>
      <div className="overflow-x-scroll scrollbar-hide md:h-[6rem] h-[5rem]">
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
      <div className="mb-6 border-b-2 border-neutral-600 py-1">
        <p className="font-medium text-lg">📣 {allNotice.at(0)}</p>
      </div>
      <div className="grid">
        {issue ? (
          <IssueList issue={issue} />
        ) : (
          <div className={'mb-5 gap-5 grid md:grid-cols-3 grid-cols-1'}>
            <div className="grid gap-y-4">
              <NewsList />
              <BoardList />
            </div>
            <About />
          </div>
        )}
      </div>
    </div>
  );
}
