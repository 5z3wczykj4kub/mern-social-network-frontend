import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanupLikeDrawer,
  sendGetUsersWhoLikedThePostReq,
} from '../../../redux/likeDrawerSlice';
import CloseIcon from '../../CloseIcon/CloseIcon';
import classes from './LikeDrawer.module.scss';
import LikesListItem from './LikesListItem/LikesListItem';

function LikeDrawer({ likes, closeLikeDrawer }) {
  const lastUserListItemRef = useRef();

  const abortControllerRef = useRef(new AbortController());

  const { users, isLoading } = useSelector(({ likeDrawer }) => likeDrawer);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = abortControllerRef.current;
    dispatch(
      sendGetUsersWhoLikedThePostReq(likes.slice(0, 10), abortController.signal)
    );
    return () => {
      dispatch(cleanupLikeDrawer());
      abortController.abort();
    };
  }, [dispatch, likes]);

  const skeletonUsersList = (
    <>
      <LikesListItem isLoading={true} likes={[]} />
      <LikesListItem isLoading={true} likes={[]} />
      <LikesListItem isLoading={true} likes={[]} />
      <LikesListItem isLoading={true} likes={[]} />
      <LikesListItem isLoading={true} likes={[]} />
    </>
  );
  const usersList = users.map((user, index) => (
    <LikesListItem
      key={user.id}
      id={user.id}
      firstName={user.firstName}
      lastName={user.lastName}
      avatarImageUrl={user.avatarImageUrl}
      likes={likes}
      ref={index === users.length - 1 ? lastUserListItemRef : null}
      signal={abortControllerRef.current.signal}
    />
  ));

  return (
    <div className={classes.likeDrawer}>
      <div>
        <div>{likes.length} likes</div>
        <div>
          <CloseIcon onClick={closeLikeDrawer} />
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
