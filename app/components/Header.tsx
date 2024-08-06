"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { StyledInput } from "../styled/Styled";

export default function Header(){
    const router = useRouter();

    const onEnter = useCallback((e: any) => {
        const value = e.target.value;
        if(e.keyCode == 13){
            router.push(`/search?v=${value}`)
        }
    }, [router])

    return (
        <div className="grid grid-cols-2 items-center">
            <Link href={'/'}>Kolosseum</Link>
            <div className="flex items-center">
                <StyledInput placeholder="년도 또는 사건을 입력해주세요." onKeyDown={onEnter} />
                <div className="flex ml-auto gap-x-3">
                    <p>테스트</p>
                    <p>로그인</p>
                </div>
            </div>
        </div>
    )
}
