import { useRef, useState, useEffect } from 'react';

import classes from './Tab.module.scss';

const Tab = ({ getTabWidth, label }) => {
  const tabRef = useRef(null);

  useEffect(() => {
    const tabWidth = tabRef.current.offsetWidth;
    getTabWidth(tabWidth);
  }, [getTabWidth]);

  return (
    <div ref={tabRef} className={classes.tab}>
      {label}
    </div>
  );
};

export default Tab;
