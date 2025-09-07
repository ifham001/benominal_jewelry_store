'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import CheckAuthLoading from '@/ui/loading/CheckAuthLoading';

export default function UserRouteProtector({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const {tokenId} = useSelector(state=>state.userAuth)

  useEffect(() => {
    

    if (!tokenId) {
    router.push('/');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return <CheckAuthLoading />;

  return <>{children}</>;
}
