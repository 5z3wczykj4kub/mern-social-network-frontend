import classes from './Spinner.module.scss';

function Spinner(props) {
  return (
    <div
      className={`${classes.spinner} ${props.className}`}
      style={props.style}
    ></div>
  );
}

export default Spinner;
