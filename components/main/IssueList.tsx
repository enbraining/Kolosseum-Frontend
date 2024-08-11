import { H1, H2 } from '@/app/service/styles/Text';
import { Issue } from '@/app/service/types/issue';

export default function IssueList({ issue }: { issue: Issue }) {
  return (
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
  );
}
