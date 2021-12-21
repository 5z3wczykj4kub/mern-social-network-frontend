import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
    return () => (document.title = 'MERN Social Network');
  }, [title]);
};

export default useTitle;
