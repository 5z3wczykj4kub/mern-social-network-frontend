import { useRef, useEffect } from 'react';

import classes from './Tab.module.scss';

const Tab = ({ getTabWidth, onTabSelect, label, index }) => {
  const tabRef = useRef(null);

  useEffect(() => getTabWidth(tabRef.current.offsetWidth), [getTabWidth]);

  return (
    <div
      ref={tabRef}
      className={classes.tab}
      onClick={() => onTabSelect(index)}
    >
      {label}
    </div>
  );
};

export default Tab;
