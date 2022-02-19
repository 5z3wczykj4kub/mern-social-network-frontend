import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import classes from './Tab.module.scss';

const Tab = ({ getTabWidth, label, index, disabled, setSelectedTabIndex }) => {
  const tabRef = useRef(null);

  useEffect(() => getTabWidth(tabRef.current.offsetWidth), [getTabWidth]);

  return (
    <div
      className={classNames({ [classes.disabled]: disabled })}
      onClick={() => {
        if (disabled) return;
        setSelectedTabIndex(index);
      }}
    >
      <div ref={tabRef} className={classes.tab}>
        {label}
      </div>
    </div>
  );
};

export default Tab;
