import { useCallback, useState } from "react"
import styled from "styled-components"
import BabyChart from "./BabyChart"
import TestChart from "./TestChart"

const StyledSelector = ({ value, type, children, onClick, ...props }: any) => {
    const Styled = styled.div`
        font-size: 1.5rem;
        line-height: 1.75rem;
        font-weight: 600;
        color: ${type == value ? "#404040" : "#a3a3a3"};

        &:hover {
            color: #404040;
        }
    `

    return <Styled onClick={() => {onClick(value)}}>{children}</Styled>
}

export default function ChartSelector(){
    const [type, setType] = useState("BABY")

    const onClick = useCallback((value: string) => {
        setType(value)
    }, [])

    return (
        <main className="grid mt-[5rem]">
            <div className="flex gap-x-3 ml-auto">
                <StyledSelector type={type} value="BABY" onClick={onClick}>합계출산율</StyledSelector>
                <StyledSelector type={type} value="TE1" onClick={onClick}>테스트1</StyledSelector>
                <StyledSelector type={type} value="TE2" onClick={onClick}>테스트2</StyledSelector>
            </div>
            <div>{
                type == "BABY" ? <BabyChart />
                : type == "TE1" ? <TestChart />
                : type == "TE2" ? <TestChart />
                : <TestChart />
            }</div>
        </main>
    )
}
