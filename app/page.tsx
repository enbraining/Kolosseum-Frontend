"use client"

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import allIssue from './data/issue.json';
import { StyledInput, StyledYears } from "./styled/Styled";
import { Issue } from "./type/issue";

export default function Home() {
    const years: string[] = ['0000', ...Array.from({ length: 2024 - 1919 + 1 }, (_, index) => (1919 + index).toString())];
    const [issue, setIssue] = useState<Issue>()
    const [currentYear, setCurrentYear] = useState('0000')
    const router = useRouter();

    useEffect(() => {
        const findIssues = allIssue.find(issue => issue.year == currentYear.toString());
        if(currentYear == '0000') setIssue(undefined)
        else if(!findIssues) toast.error(`${currentYear}년에는 현재 데이터가 없습니다.`);
        else setIssue(findIssues)
    }, [currentYear])

    const onEnter = useCallback((e: any) => {
        const value = e.target.value;
        if(e.keyCode == 13){
            router.push(`/search?v=${value}`)
        }
    }, [router])

    return (
        <main className="mt-5">
        <StyledInput placeholder="년도 또는 사건을 입력해주세요." onKeyDown={onEnter} />
        <div className="overflow-x-scroll scrollbar-hide sm:h-[8rem] h-[7rem]">
            <StyledYears id="years" className="mt-4 mx-auto text-stone-500 [writing-mode:vertical-lr]">
            {years.map(year =>
                <div onClick={() => {setCurrentYear(year)}} key={year} className={`${year == issue?.year.toString() ? "text-4xl text-stone-700 font-black" : "text-2xl"} font-bold no-touch:hover:font-black no-touch:hover:text-4xl no-touch:hover:text-stone-700 duration-150`}>{year}</div>
            )}
            </StyledYears>
        </div>
        <div className="grid mt-[1rem]">
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
                    <div className={'mb-5'}>
                        <h1 className="text-3xl text-red-950 font-bold">안녕하세요, 역사 기록 프로젝트 Kolosseum입니다.</h1>
                        <p className="text-xl font-medium">현재는 데이터가 정확하지 않을 수도 있으며 이슈 혹은 메일을 보내주시면 빠르게 추가하거나 수정하겠습니다.</p>
                        <p className="text-xl font-medium">me@fodo.dev</p>
                    </div>
            )}
        </div>
    </main>
  );
}
