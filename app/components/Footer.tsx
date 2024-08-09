'use client';

import { StyledFooter } from '../styled/Tag';
import { H1 } from '../styled/Text';

export default function Footer() {
  return (
    <StyledFooter className="border-t grid pt-6 m-10 gap-y-3">
      <div>
        <H1>Kolosseum</H1>
        <p className="text-neutral-600">역사를 잊은 민족에게 미래는 없다.</p>
      </div>
      <div>
        <p className="text-neutral-600">개발자 김동학 | me@fodo.dev</p>
      </div>
    </StyledFooter>
  );
}
