"use client"

import { useState } from "react";
import { findYear, Issue } from "./data/issue";

export default function Home() {
    const [year, setYear] = useState<Issue>()
    const years = Array.from(Array(2024 - 1960).keys()).map(i => i + 1960);

  return (
    <main className="grid w-full">
        <div className="absolute w-full overflow-x-scroll scrollbar-hide">
            <div className="mt-10 mx-auto text-stone-500 [writing-mode:vertical-lr] px-10">
            {years.map(value =>
                <div onClick={() => {setYear(findYear(value))}} key={value} className={`${value == year?.year ? "text-4xl text-stone-700 font-black" : "hover:font-black hover:text-4xl hover:text-stone-700"} font-bold duration-150 text-2xl`}>{value}</div>)
            }
            </div>
        </div>
        <div className="grid mt-[10rem] m-10">
            {year ? <div className="w-full mx-auto grid gap-10">
                <h1 className="text-4xl text-neutral-600 font-bold">{`${year.year}년, ${year.issue.length}개의 기록`}</h1>
                {year.issue.map((value, index) =>
                <div className="rounded-xl" key={index}>
                    <h1 className="text-3xl text-red-950 font-bold">{value.name}</h1>
                    <p className="text-xl font-medium">{value.description}</p>
                </div>
            )}</div> : <div>
            <div className={'mb-5'}>    <h1 className="text-3xl text-red-950 font-bold">안녕하세요, 역사 기록 프로젝트</h1>
            <h1 className="text-3xl text-red-950 font-bold">Kolosseum입니다.</h1></div>
            <p className="text-xl font-medium">현재는 데이터가 정확하지 않을 수도 있으며 이슈 혹은 메일을 보내주시면 빠르게 추가하거나 수정하겠습니다.</p>
            <p className="text-xl font-medium">me@fodo.dev</p>
                </div>}
        </div>
    </main>
  );
}
