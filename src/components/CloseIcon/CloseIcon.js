import classes from './CloseIcon.module.scss';

const CloseIcon = ({ onClick }) => (
  <div className={classes.closeIcon} onClick={onClick}></div>
);

export default CloseIcon;
