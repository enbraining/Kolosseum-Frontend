'use client';

import { H2 } from '../service/styles/Text';
import { useUserStore } from '../service/utils/zustand';

export default function Page() {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <H2>{user?.email}</H2>
    </div>
  );
}
