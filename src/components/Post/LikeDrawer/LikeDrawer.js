import { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  sendGetUsersWhoLikedThePostReq,
  cleanupLikeDrawer,
} from '../../../redux/postSlice';

import LikesListItem from './LikesListItem/LikesListItem';
import CloseIcon from '../../CloseIcon/CloseIcon';

import classes from './LikeDrawer.module.scss';

function LikeDrawer() {
  const lastUserListItemRef = useRef();

  const { fetchedPosts, likeDrawer } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  const { likes } = fetchedPosts[likeDrawer.postIndex];

  useEffect(() => {
    dispatch(sendGetUsersWhoLikedThePostReq(likes.slice(0, 10)));
    return () => dispatch(cleanupLikeDrawer());
  }, [dispatch, likes]);

  const skeletonUsersList = (
    <>
      <LikesListItem isLoading={true} />
      <LikesListItem isLoading={true} />
      <LikesListItem isLoading={true} />
      <LikesListItem isLoading={true} />
      <LikesListItem isLoading={true} />
    </>
  );
  const usersList = likeDrawer.users.map((user, index) => (
    <LikesListItem
      key={user.id}
      firstName={user.firstName}
      lastName={user.lastName}
      avatarImageUrl={user.avatarImageUrl}
      ref={index === likeDrawer.users.length - 1 ? lastUserListItemRef : null}
    />
  ));

  return (
    <div className={classes.likeDrawer}>
      <div>
        <div>{likes.length} likes</div>
        <div>
          <CloseIcon />
        </div>
      </div>
      <ul>
        {likeDrawer.users.length > 0 && usersList}
        {likeDrawer.isLoading && skeletonUsersList}
      </ul>
    </div>
  );
}

export const likeDrawerClassNames = () => ({
  enter: classes.likeDrawerEnter,
  enterActive: classes.likeDrawerEnterActive,
  exit: classes.likeDrawerExit,
  exitActive: classes.likeDrawerExitActive,
});

export default LikeDrawer;
