'use client';

import { getCookie } from '@/app/actions';
import { StyledInput, StyledToggleInput } from '@/app/service/styles/Tag';
import { User } from '@/app/service/types/user';
import { WithCredential } from '@/app/service/utils/axios';
import { useUserStore } from '@/app/service/utils/zustand';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isPermission, setPermission] = useState(false);
  const setUser = useUserStore(
    (state) => state.setUser as (user: User | null) => void,
  );

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
      const token = await getCookie('Authorization');
      if (token) {
        const response = await WithCredential().get('/user/status', {
          headers: { Authorization: token },
        });
        setUser({ id: response.data.id, email: response.data.email });
        setPermission(true);
      } else {
        setUser(null);
        setPermission(false);
      }
    };

    fetchStatus();
    setOpen(false);
  }, [pathname, setUser]);

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
      <div className="grid grid-cols-2 items-center my-3">
        <Link className="text-xl font-bold" href={'/'}>
          Kolosseum
        </Link>
        <div className="md:flex hidden items-center">
          <StyledInput
            placeholder={`년도 혹은 키워드를 입력해주세요.`}
            onKeyDown={onEnter}
          />
          <div className="flex ml-auto gap-x-3">
            {isPermission ? (
              <div className="flex gap-x-3">
                <Link href={'/auth/logout'}>로그아웃</Link>
                <Link href={'/profile'}>프로필</Link>
              </div>
            ) : (
              <Link href={'/auth/login'}>로그인</Link>
            )}
          </div>
        </div>
        <button
          className="md:hidden ml-auto"
          name="toggle-menu"
          onClick={toggleMenu}
        >
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
      <div className="relative">
        {isOpen && (
          <div className="absolute w-full min-h-screen bg-[#FFFDF7] pt-5">
            <div className="grid gap-y-2 text-xl font-semibold">
              <StyledToggleInput
                className="w-full"
                placeholder={`검색하기`}
                onKeyDown={onEnter}
              />
              {isPermission ? (
                <div className="grid gap-y-3">
                  <Link href={'/auth/logout'}>로그아웃</Link>
                  <Link href={'/profile'}>프로필</Link>
                </div>
              ) : (
                <Link href={'/auth/login'}>로그인</Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
