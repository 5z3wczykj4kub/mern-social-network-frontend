import { useDispatch } from 'react-redux';
import { closeLikeDrawer } from '../../redux/likeDrawerSlice';

import classes from './CloseIcon.module.scss';

function CloseIcon() {
  const dispatch = useDispatch();

  return (
    <div
      className={classes.closeIcon}
      onClick={() => dispatch(closeLikeDrawer())}
    ></div>
  );
}

export default CloseIcon;
