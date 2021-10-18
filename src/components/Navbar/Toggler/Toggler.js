import { useState } from 'react';

import classes from './Toggler.module.scss';

function Toggler(props) {
  const [isTouched, setIsTouched] = useState(false);

  function onClickHandler() {
    setIsTouched(true);
    props.onClick();
  }

  function className() {
    if (!props.isToggled && !isTouched) return classes.toggler;
    if (props.isToggled && isTouched)
      return `${classes.toggler} ${classes.togglerActive}`;
    if (!props.isToggled && isTouched)
      return `${classes.toggler} ${classes.togglerInactive}`;
  }

  return (
    <div className={className()} onClick={onClickHandler}>
      <div></div>
    </div>
  );
}

export default Toggler;
