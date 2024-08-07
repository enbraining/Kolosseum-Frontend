'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import allNews from '../datas/news.json';
import { StyledInput, StyledToggleInput } from '../styled/Tag';
import { getCookie } from '../utils/cookie';

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isUser, setUser] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchStatus = async () => {
      if (await getCookie('Authorization')) setUser(true);
      else setUser(false);
    };

    fetchStatus();
    setOpen(false);
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const onEnter = useCallback(
    (e: any) => {
      const value = e.target.value;
      if (e.keyCode == 13) {
        router.push(`/search?v=${value}`);
      }
    },
    [router],
  );

  return (
    <div>
      <div className="grid grid-cols-2 items-center my-3 mx-10">
        <Link className="text-xl font-bold" href={'/'}>
          Kolosseum
        </Link>
        <div className="sm:flex hidden items-center">
          <StyledInput
            placeholder={`${allNews.at(0)?.name}`}
            onKeyDown={onEnter}
          />
          <div className="flex ml-auto gap-x-3">
            {isUser ? (
              <Link href={'/auth/logout'}>로그아웃</Link>
            ) : (
              <Link href={'/auth/login'}>로그인</Link>
            )}
          </div>
        </div>
        <button className="sm:hidden ml-auto" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute w-full h-full bg-[#FFF9E7] pt-5 pr-10">
          <div className="grid gap-y-2 text-xl font-semibold mx-10">
            <StyledToggleInput
              className="w-full"
              placeholder={`검색하기`}
              onKeyDown={onEnter}
            />
            {isUser ? (
              <Link href={'/auth/logout'}>로그아웃</Link>
            ) : (
              <Link href={'/auth/login'}>로그인</Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
