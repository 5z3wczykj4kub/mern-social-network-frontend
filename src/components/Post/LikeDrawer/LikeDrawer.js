import { useEffect, useRef, useState } from 'react';
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

  const [abortController] = useState(new AbortController());

  const { users, isLoading } = useSelector(({ likeDrawer }) => likeDrawer);
  const dispatch = useDispatch();

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
    // <>
    //   <LikesListItem isLoading={true} />
    //   <LikesListItem isLoading={true} />
    //   <LikesListItem isLoading={true} />
    //   <LikesListItem isLoading={true} />
    //   <LikesListItem isLoading={true} />
    // </>
    <p>loading...</p>
  );
  const usersList = users.map((user, index) => (
    <LikesListItem
      key={user.id}
      firstName={user.firstName}
      lastName={user.lastName}
      avatarImageUrl={user.avatarImageUrl}
      likes={likes}
      ref={index === users.length - 1 ? lastUserListItemRef : null}
      signal={abortController.signal}
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
