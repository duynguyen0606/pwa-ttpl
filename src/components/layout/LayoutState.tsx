'use client';

import { getListArticle } from '@/src/redux/feature/postSlice';
import { useAppDispatch } from '@/src/redux/hooks';
import { PropsWithChildren, useEffect } from 'react';

function LayoutState(props: PropsWithChildren) {
  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListArticle());
  }, []);

  return children;
}

export default LayoutState;
