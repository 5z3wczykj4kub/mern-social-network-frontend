import classes from './Tabs.module.scss';

const Tabs = ({ tabWidths, children }) => {
  const components = children;

  return (
    <>
      <div className={classes.tabs}>{children}</div>
      <div className={classes.line}>
        <div
          className={classes.lineHighlight}
          style={{ width: tabWidths[1] }}
        ></div>
      </div>
    </>
  );
};

export default Tabs;
