import { useEffect } from 'react';

import classes from './Backdrop.module.scss';

function Backdrop(props) {
  useEffect(() => {
    document.body.style = 'overflow-y: hidden';
    return () => (document.body.style = null);
  }, []);

  return (
    <div
      className={`${classes.backdrop} ${props.className}`}
      onClick={props.onClick}
    ></div>
  );
}

export const backdropClassNames = (delayed = false) =>
  !delayed
    ? {
        enter: classes.backdropEnter,
        enterActive: classes.backdropEnterActive,
        exit: classes.backdropExit,
        exitActive: classes.backdropExitActive,
      }
    : {
        enter: classes.backdropDelayedEnter,
        enterActive: classes.backdropDelayedEnterActive,
        exit: classes.backdropDelayedExit,
        exitActive: classes.backdropDelayedExitActive,
      };

export default Backdrop;
