import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useLocationChange = (cb) => {
  const { pathname } = useLocation();
  useEffect(() => cb(), [pathname, cb]);
};

export default useLocationChange;
