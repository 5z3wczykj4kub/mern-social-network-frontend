import classNames from 'classnames';

import classes from './SkeletonCommentsListItem.module.scss';

function SkeletonCommentsListItem(props) {
  const className = classNames(classes.skeletonCommentsListItem, {
    [props.className]: props.className,
  });

  return (
    <div className={className}>
      <span></span>
      <span></span>
    </div>
  );
}

export default SkeletonCommentsListItem;
