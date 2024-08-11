import { AxiosFetch } from '@/app/service/utils/axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ListSkeleton } from '../skeleton/ListSkeleton';

export default function BoardList() {
  const [boards, setBoards] = useState<any[]>();

  useEffect(() => {
    const fetchBoards = async () => {
      setBoards((await AxiosFetch().get('/board?count=4')).data);
    };

    fetchBoards();
  }, []);

  return (
    <div className="border p-4 divide-y divide-neutral-500 rounded-lg border-neutral-500">
      <div className="flex items-center my-2">
        <p className="font-semibold text-2xl">커뮤니티</p>
        <Link className="ml-auto" href={'/forum'}>
          더보기 →
        </Link>
      </div>
      <div className="grid gap-y-3 pt-5">
        {boards ? (
          boards.map((board, index) => (
            <div key={index}>
              <p className="font-semibold">{board.title}</p>
              <p>{board.published}</p>
            </div>
          ))
        ) : (
          <ListSkeleton />
        )}
      </div>
    </div>
  );
}
