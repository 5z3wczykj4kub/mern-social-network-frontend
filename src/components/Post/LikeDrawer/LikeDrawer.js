import { useRef, useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  sendGetUsersWhoLikedThePostReq,
  cleanupLikeDrawer,
} from '../../../redux/likeDrawerSlice';

import LikesListItem from './LikesListItem/LikesListItem';
import CloseIcon from '../../CloseIcon/CloseIcon';

import classes from './LikeDrawer.module.scss';

function LikeDrawer() {
  const lastUserListItemRef = useRef();

  const [abortController] = useState(new AbortController());

  const { users, isLoading, postId } = useSelector(
    ({ likeDrawer }) => likeDrawer
  );
  const cachedPost = useSelector(({ post }) =>
    post.fetchedPosts.find(({ id }) => id === postId)
  );
  const comments = useSelector((state) => state.post.comments);
  const dispatch = useDispatch();

  const { likes } = !cachedPost && comments ? comments : cachedPost;

  useEffect(() => {
    dispatch(
      sendGetUsersWhoLikedThePostReq(likes.slice(0, 10), abortController.signal)
    );
    return () => {
      dispatch(cleanupLikeDrawer());
      abortController.abort();
    };
  }, [dispatch, likes, abortController]);

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
      signal={abortController.signal}
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
