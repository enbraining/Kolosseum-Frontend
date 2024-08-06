"use client"

import Link from "next/link";
import { StyledFooter } from "../styled/Tag";
import { CarbonLogoDiscord, GrommetIconsGithub } from "./Icons";

export default function Footer(){
    return (
        <StyledFooter className="border-t mt-10 grid pt-4 mx-10">
            <div className="ml-auto gap-x-2 flex">
                <Link className="text-teal-600 hover:text-teal-800" href={"https://github.com/enbraining"}><GrommetIconsGithub scope={30} /></Link>
                <Link className="text-teal-600 hover:text-teal-800" href={"https://discord.gg/36tCw3kYuJ"}>
                    <CarbonLogoDiscord scope={30} />
                </Link>
            </div>
        </StyledFooter>
    )
}
