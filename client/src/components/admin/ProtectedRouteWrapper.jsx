'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import CheckAuthLoading from '@/ui/loading/CheckAuthLoading';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const {token} = useSelector(state=>state.adminAuth)

  useEffect(() => {
    

    if (!token) {
      router.push('/admin');
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return <CheckAuthLoading />;

  return <>{children}</>;
}
