import classes from './LikeDrawer.module.scss';

function LikeDrawer() {
  return <div className={classes.likeDrawer}></div>;
}

export const likeDrawerClassNames = () => ({
  enter: classes.likeDrawerEnter,
  enterActive: classes.likeDrawerEnterActive,
  exit: classes.likeDrawerExit,
  exitActive: classes.likeDrawerExitActive,
});

export default LikeDrawer;
