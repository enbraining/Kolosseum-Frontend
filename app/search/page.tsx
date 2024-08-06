'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import issueList from '../data/issue.json'
import { StyledInput } from "../styled/Styled"
import { Issue } from "../type/issue"

export default function Page(){
    const searchParams = useSearchParams()
    const router = useRouter()

    const [search, setSearch] = useState<string | null>()
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {
        setSearch(searchParams.get('v'))
        setIssues(issueList.filter(issue => {
            return issue.year == search || `${issue.year} ${issue.history.map(history => `${history.name} ${history.description}`).join(' ')}`.includes(search as string)
        }))
    }, [search, searchParams])

    const onEnter = useCallback((e: any) => {
        const value = e.target.value;
        if(e.keyCode == 13){
            router.push(`/search?v=${value}`)
        }
    }, [router])

    return (
        <main className="mx-10" >
            <StyledInput placeholder={"년도 또는 사건을 입력해주세요."} onKeyDown={onEnter} defaultValue={search?.toString()} />
            <div className={'grid gap-y-3'}>
                {issues.length == 0 ? <div>찾을 수 없습니다.</div> : issues.map(issue => <div key={issue.year}>
                    <h1 className="font-semibold text-2xl">{issue.year}</h1>
                    <p>{issue.history.map(history => `${history.name} ${history.description} `)}</p>
                </div>)}
            </div>
        </main >
    )
}
