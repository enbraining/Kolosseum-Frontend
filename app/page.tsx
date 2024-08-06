"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import allIssue from './data/issue.json';
import allNews from './data/news.json';
import allNotice from './data/notice.json';
import { StyledYears } from "./styled/Styled";
import { Issue } from "./type/issue";

export default function Home() {
    const years: string[] = ['0000', ...Array.from({ length: 2024 - 1919 + 1 }, (_, index) => (1919 + index).toString())];
    const [issue, setIssue] = useState<Issue>()
    const [currentYear, setCurrentYear] = useState('0000')

    useEffect(() => {
        const findIssues = allIssue.find(issue => issue.year == currentYear.toString());
        if(currentYear == '0000') setIssue(undefined)
        else if(!findIssues) toast.error(`${currentYear}년에는 현재 데이터가 없습니다.`);
        else setIssue(findIssues)
    }, [currentYear])

    return (
        <main className="mx-10">
        <div className="overflow-x-scroll scrollbar-hide sm:h-[6rem] h-[5rem]">
            <StyledYears id="years" className="mx-auto text-stone-500 [writing-mode:vertical-lr]">
            {years.map(year =>
                <div onClick={() => {setCurrentYear(year)}} key={year} className={`${year == issue?.year.toString() ? "text-3xl text-stone-700 font-black" : "text-2xl"} font-bold no-touch:hover:font-black no-touch:hover:text-3xl no-touch:hover:text-stone-700 duration-150`}>{year}</div>
            )}
            </StyledYears>
        </div>
        <div className="mb-16 border-b-2 border-neutral-600 py-1">
            <p className="font-medium text-lg">📣 {allNotice.at(0)}</p>
        </div>
        <div className="grid">
            {issue ? (
                <div className="w-full mx-auto grid gap-10">
                <h1 className="text-4xl text-neutral-600 font-bold">{`${issue.year}년, ${issue.history.length}개의 기록`}</h1>
                {issue.history.map((history, index) =>
                    <div className="rounded-xl" key={index}>
                        <h1 className="text-3xl text-red-950 font-bold">{history.name}</h1>
                        <p className="text-xl font-medium">{history.description}</p>
                    </div>
                )}
            </div>) : (
                <div className={'mb-5 gap-5 grid sm:grid-cols-3 grid-cols-1'}>
                        <div className="grid gap-y-14">
                            <div>
                                <div className="flex items-center">
                                    <Link href={'/news'} className="font-semibold text-2xl">최신 뉴스 {">"}</Link>
                                </div>
                                <div className="mt-5 grid gap-y-3">
                                    {allNews.map((news, index) => <div key={index}>
                                        <h1 className="font-semibold">{news.name}</h1>
                                        <p>{news.createdAt}</p>
                                    </div>)}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <Link href={'/news'} className="font-semibold text-2xl">커뮤니티 {">"}</Link>
                                </div>
                                <div className="mt-5 grid gap-y-3">
                                    {allNews.map((news, index) => <div key={index}>
                                        <h1 className="font-semibold">{news.name}</h1>
                                        <p>{news.createdAt}</p>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="h-min grid gap-y-3">
                            <div className="text-red-950 font-semibold text-2xl">
                                <h1>역사를 보존하다.</h1>
                                <h1>Kolosseum 입니다.</h1>
                            </div>
                            <div>
                                <p>현재 콜로세움은 베타 서비스입니다.</p>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    </main>
  );
}
