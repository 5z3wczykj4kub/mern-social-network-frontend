import { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  sendGetUsersWhoLikedThePostReq,
  cleanupLikeDrawer,
} from '../../../redux/likeDrawer';

import LikesListItem from './LikesListItem/LikesListItem';
import CloseIcon from '../../CloseIcon/CloseIcon';

import classes from './LikeDrawer.module.scss';

function LikeDrawer() {
  const lastUserListItemRef = useRef();

  const { fetchedPosts } = useSelector(({ post }) => post);
  const { users, isLoading, postIndex } = useSelector(
    ({ likeDrawer }) => likeDrawer
  );
  const dispatch = useDispatch();

  const { likes } = fetchedPosts[postIndex];

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
  const usersList = users.map((user, index) => (
    <LikesListItem
      key={user.id}
      firstName={user.firstName}
      lastName={user.lastName}
      avatarImageUrl={user.avatarImageUrl}
      ref={index === users.length - 1 ? lastUserListItemRef : null}
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
        {users.length > 0 && usersList}
        {isLoading && skeletonUsersList}
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
