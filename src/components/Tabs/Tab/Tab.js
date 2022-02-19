import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Tab.module.scss';

const Tab = ({ getTabWidth, label, to, disabled }) => {
  const tabRef = useRef(null);

  useEffect(() => getTabWidth(tabRef.current.offsetWidth), [getTabWidth]);

  return (
    <Link
      className={classNames({ [classes.disabled]: disabled })}
      to={!disabled ? to : '#'}
    >
      <div ref={tabRef} className={classes.tab}>
        {label}
      </div>
    </Link>
  );
};

export default Tab;
