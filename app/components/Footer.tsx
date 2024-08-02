"use client"

import Link from "next/link";
import { StyledFooter } from "../styled/Styled";
import { CarbonLogoDiscord, GrommetIconsGithub } from "./Icons";

export default function Footer(){
    return (
        <StyledFooter className="border-t grid-flow-col mt-10 grid pt-4">
            <div>
                <p>많은 사람이 군집상태에서 행동할 때 이 행동을 불러일으키는 전체적인 심리적 메커니즘과 이 행동에 참가하고 있는 사람들이 경험하는 심리상태</p>
            </div>
            <div className="ml-auto gap-x-2 flex">
                <Link className="text-teal-600 hover:text-teal-800" href={"https://github.com/enbraining"}><GrommetIconsGithub scope={30} /></Link>
                <Link className="text-teal-600 hover:text-teal-800" href={"https://discord.gg/36tCw3kYuJ"}>
                    <CarbonLogoDiscord scope={30} />
                </Link>
            </div>
        </StyledFooter>
    )
}
