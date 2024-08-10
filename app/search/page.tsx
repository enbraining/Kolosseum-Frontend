'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import issueList from '../datas/issue.json';
import Layout from '../service/layouts/Layout';
import { Issue } from '../service/types/issue';

export default function Page() {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState<string | null>();
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    setSearch(searchParams.get('v'));
    setIssues(
      issueList.filter((issue) => {
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
    <Layout>
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
    </Layout>
  );
}
