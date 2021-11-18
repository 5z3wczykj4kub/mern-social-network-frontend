import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

function useInfiniteScrolling(ref, action, hasMoreElements, page) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreElements) {
        dispatch(action);
        observer.unobserve(ref.current);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [dispatch, ref, hasMoreElements, page, action]);
}

export default useInfiniteScrolling;
