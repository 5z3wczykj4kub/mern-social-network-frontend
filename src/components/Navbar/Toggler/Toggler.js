import { useSelector, useDispatch } from 'react-redux';
import { toggleDropdownMenu } from '../../../redux/navbarSlice';

import classes from './Toggler.module.scss';

function Toggler() {
  const { isDropdownMenuOpen, isTogglerTouched } = useSelector(
    ({ navbar }) => navbar
  );
  const dispatch = useDispatch();

  function className() {
    if (!isDropdownMenuOpen && !isTogglerTouched) return classes.toggler;
    if (isDropdownMenuOpen && isTogglerTouched)
      return `${classes.toggler} ${classes.togglerActive}`;
    if (!isDropdownMenuOpen && isTogglerTouched)
      return `${classes.toggler} ${classes.togglerInactive}`;
  }

  return (
    <div className={className()} onClick={() => dispatch(toggleDropdownMenu())}>
      <div></div>
    </div>
  );
}

export default Toggler;
