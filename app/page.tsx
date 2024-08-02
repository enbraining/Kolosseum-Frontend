"use client"

import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import allIssue from './data/issue.json';
import { StyledInput, StyledYears } from "./styled/Styled";
import { Issue } from "./type/issue";

export default function Home() {
    const years = Array.from({ length: 2024 - 1919 + 1 }, (_, index) => 1919 + index);
    const [issues, setIssues] = useState<Issue[]>([])

    const onClick = useCallback((year: number) => {
        setIssues(allIssue.filter(issue => issue.year == year))
    }, [])

    const onEnter = useCallback((e: any) => {
        if(e.keyCode == 13){
            const findIssues = allIssue.filter(issue => issue.year == e.target.value);
            if(findIssues.length == 0) toast.error(`${e.target.value}년에는 현재 데이터가 없습니다.`);
            setIssues(findIssues);
        }
    }, [])

  return (
    <main className="grid w-full">
        <div className="absolute w-full overflow-x-scroll scrollbar-hide">
            <StyledYears className="mt-10 mx-auto text-stone-500 [writing-mode:vertical-lr] px-10">
            <div onClick={() => {onClick(0);}} className={`${issues.length == 0 && "text-4xl text-stone-700 font-black"} text-2xl font-bold no-touch:hover:font-black no-touch:hover:text-4xl no-touch:hover:text-stone-700 duration-150`}>{'0000'}</div>
            {years.map(year =>
                <div onClick={() => {onClick(year);}} key={year} className={`${year == issues.at(0)?.year ? "text-4xl text-stone-700 font-black" : "text-2xl"} font-bold no-touch:hover:font-black no-touch:hover:text-4xl no-touch:hover:text-stone-700 duration-150`}>{year}</div>
            )}
            </StyledYears>
        </div>
        <div className="grid mt-[10rem] m-10">
            {issues.length !== 0 ? <div className="w-full mx-auto grid gap-10">
                <h1 className="text-4xl text-neutral-600 font-bold">{`${issues.at(0)?.year}년, ${issues.length}개의 기록`}</h1>
                {issues.map((issue) =>
                <div className="rounded-xl" key={issue.id}>
                    <h1 className="text-3xl text-red-950 font-bold">{issue.name}</h1>
                    <p className="text-xl font-medium">{issue.description}</p>
                </div>
            )}</div> :
            <div>
                <div className={'mb-5'}>
                    <StyledInput placeholder="찾는 년도를 입력하세요." onKeyDown={onEnter} />
                    <div>
                        <h1 className="text-3xl text-red-950 font-bold">안녕하세요, 역사 기록 프로젝트</h1>
                        <h1 className="text-3xl text-red-950 font-bold">Kolosseum입니다.</h1></div>
                        <p className="text-xl font-medium">현재는 데이터가 정확하지 않을 수도 있으며 이슈 혹은 메일을 보내주시면 빠르게 추가하거나 수정하겠습니다.</p>
                        <p className="text-xl font-medium">me@fodo.dev</p>
                    </div>
                </div>
            }
        </div>
    </main>
  );
}
