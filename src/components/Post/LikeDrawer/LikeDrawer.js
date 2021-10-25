import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  sendGetUsersWhoLikedThePostReq,
  cleanupLikeDrawer,
} from '../../../redux/postSlice';

import UserListItem from '../../Navbar/SearchList/SearchListItem/SearchListItem';

import classes from './LikeDrawer.module.scss';

function LikeDrawer() {
  const { fetchedPosts, likeDrawer } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  const { likes } = fetchedPosts[likeDrawer.postIndex];

  useEffect(() => {
    dispatch(sendGetUsersWhoLikedThePostReq(likes));
    return () => dispatch(cleanupLikeDrawer());
  }, [dispatch, likes]);

  const skeletonUsersList = (
    <>
      <UserListItem isLoading={true} />
      <UserListItem isLoading={true} />
      <UserListItem isLoading={true} />
      <UserListItem isLoading={true} />
      <UserListItem isLoading={true} />
    </>
  );
  const usersList = likeDrawer.users.map((user) => (
    <UserListItem
      key={user.id}
      firstName={user.firstName}
      lastName={user.lastName}
      avatarImageUrl={user.avatarImageUrl}
    />
  ));

  return (
    <div className={classes.likeDrawer}>
      <p>Likes:</p>
      <ul>
        {likeDrawer.isLoading && skeletonUsersList}
        {!likeDrawer.isLoading && likeDrawer.users.length > 0 && usersList}
        {!likeDrawer.isLoading &&
          likeDrawer.users.length === 0 &&
          likes.length === 0 && <li>No one has liked this post yet</li>}
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
