import { AxiosFetch } from '@/app/service/utils/axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ListSkeleton } from '../skeleton/ListSkeleton';

export default function NewsList() {
  const [news, setNews] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchBoards = async () => {
      setNews((await AxiosFetch().get('/board?count=4')).data);
    };

    fetchBoards();
  }, []);

  return (
    <div className="border p-4 divide-y divide-neutral-500 rounded-lg border-neutral-500">
      <div className="flex items-center my-2">
        <p className="font-semibold text-2xl">최신 뉴스</p>
        <Link className="ml-auto" href={'/news'}>
          더보기 →
        </Link>
      </div>
      <div className="grid gap-y-3 pt-5">
        {news ? (
          news.map((news, index) => (
            <div key={index}>
              <p className="font-semibold">{news.title}</p>
              <p>{news.published}</p>
            </div>
          ))
        ) : (
          <ListSkeleton />
        )}
      </div>
    </div>
  );
}
