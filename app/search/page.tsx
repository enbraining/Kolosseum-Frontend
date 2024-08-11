'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { allIssue } from '../service/mocks/issue';
import { Issue } from '../service/types/issue';

export default function Page() {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState<string | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    setSearch(searchParams.get('v'));
    setIssues(
      allIssue.filter((issue) => {
        return (
          issue.year == search ||
          `${issue.year} ${issue.history.map((history) => `${history.name} ${history.description}`).join(' ')}`.includes(
            search as string,
          )
        );
      }),
    );
  }, [search, searchParams]);

  return (
    <div>
      <div className={'grid gap-y-3'}>
        {issues.length == 0 ? (
          <div>찾을 수 없습니다.</div>
        ) : (
          issues.map((issue) => (
            <div key={issue.year}>
              <h1 className="font-semibold text-2xl">{issue.year}</h1>
              <p>
                {issue.history.map(
                  (history) => `${history.name} ${history.description} `,
                )}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
