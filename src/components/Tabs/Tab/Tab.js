import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Tab.module.scss';

const Tab = ({ getTabWidth, onTabSelect, label, to, index }) => {
  const tabRef = useRef(null);

  useEffect(() => getTabWidth(tabRef.current.offsetWidth), [getTabWidth]);

  return (
    <Link to={to}>
      <div
        ref={tabRef}
        className={classes.tab}
        onClick={() => onTabSelect(index)}
      >
        {label}
      </div>
    </Link>
  );
};

export default Tab;
