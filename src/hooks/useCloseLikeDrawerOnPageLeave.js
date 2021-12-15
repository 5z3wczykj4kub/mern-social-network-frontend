import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { cleanupLikeDrawer } from '../redux/likeDrawerSlice';

function useCloseLikeDrawerOnPageLeave() {
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(cleanupLikeDrawer());
    },
    [dispatch]
  );
}

export default useCloseLikeDrawerOnPageLeave;
