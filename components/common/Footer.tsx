'use client';

import { StyledFooter } from '@/app/service/styles/Tag';
import { H1 } from '@/app/service/styles/Text';
import Link from 'next/link';
import { CarbonLogoDiscord, GrommetIconsGithub } from './Icons';

export default function Footer() {
  return (
    <StyledFooter className="border-t flex pt-6 my-10 gap-y-3">
      <div>
        <H1>Kolosseum</H1>
        <p className="text-neutral-600">역사를 잊은 민족에게 미래는 없다.</p>
        <p className="text-neutral-600">개발자 김동학 | me@fodo.dev</p>
      </div>
      <div className="ml-auto flex gap-x-2">
        <Link href="https://discord.gg/36tCw3kYuJ">
          <CarbonLogoDiscord scope={30} />
        </Link>
        <Link href="https://github.com/xolving">
          <GrommetIconsGithub scope={30} />
        </Link>
      </div>
    </StyledFooter>
  );
}
