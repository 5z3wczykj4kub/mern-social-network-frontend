import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import friends from '../../../../assets/friends.png';
import classes from './SkeletonProfileHeader.module.scss';

const SkeletonProfileHeader = () => {
  const authProfileId = useSelector((state) => state.authProfile.id);

  const { profileId } = useParams();

  return (
    <header className={classes.skeletonProfileHeader}>
      <div className={classes.skeletonBackgroundImage}></div>
      <div className={classes.skeletonInfo}>
        <div className={classes.skeletonAvatar}></div>
        {/* eslint-disable-next-line */}
        <h1></h1>
        <p>
          <img src={friends} alt='friends' /> <span></span>
        </p>
        {authProfileId !== profileId && (
          <div className={classes.skeletonButton}></div>
        )}
      </div>
    </header>
  );
};

export default SkeletonProfileHeader;
