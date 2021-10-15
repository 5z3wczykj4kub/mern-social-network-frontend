import classes from './Backdrop.module.scss';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
}

export default Backdrop;
