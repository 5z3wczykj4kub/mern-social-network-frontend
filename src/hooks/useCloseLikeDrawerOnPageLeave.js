import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { closeLikeDrawer, cleanupLikeDrawer } from '../redux/likeDrawerSlice';

function useCloseLikeDrawerOnPageLeave() {
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(closeLikeDrawer());
      dispatch(cleanupLikeDrawer());
    },
    [dispatch]
  );
}

export default useCloseLikeDrawerOnPageLeave;
