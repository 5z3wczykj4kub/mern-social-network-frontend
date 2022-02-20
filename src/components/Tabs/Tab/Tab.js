import classNames from 'classnames';
import { useLayoutEffect, useRef } from 'react';
import classes from './Tab.module.scss';

const Tab = ({ getTabWidth, label, index, disabled, setSelectedTabIndex }) => {
  const tabRef = useRef(null);

  useLayoutEffect(
    () => getTabWidth(tabRef.current.getBoundingClientRect().width),
    [getTabWidth]
  );

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
