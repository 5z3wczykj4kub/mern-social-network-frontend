import { forwardRef, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { sendGetUsersWhoLikedThePostReq } from '../../../../redux/likeDrawerSlice';

import useInfiniteScrolling from '../../../../hooks/useInfiniteScrolling';

import avatar from '../../../../assets/avatar64x64.png';

import classes from './LikesListItem.module.scss';

const LikesListItem = forwardRef((props, lastUserListItemRef) => {
  const { page, hasMoreLikes, postId } = useSelector(
    ({ likeDrawer }) => likeDrawer
  );
  const fetchedPost = useSelector(({ post }) =>
    post.fetchedPosts.find(({ id }) => id === postId)
  );
  const { detailedPost } = useSelector(({ detailedPost }) => detailedPost);

  const { likes } = !fetchedPost && detailedPost ? detailedPost : fetchedPost;

  const action = useMemo(
    () =>
      sendGetUsersWhoLikedThePostReq(likes.slice(page * 10, (page + 1) * 10)),
    [likes, page]
  );

  useInfiniteScrolling(lastUserListItemRef, action, hasMoreLikes, page);

  function className() {
    return props.isLoading
      ? `${classes.likesListItem} ${classes.loading}`
      : classes.likesListItem;
  }

  return (
    <li className={className()} ref={lastUserListItemRef}>
      {props.avatarImageUrl ? (
        <img src={props.avatarImageUrl} alt="avatar" />
      ) : (
        <img src={avatar} alt="avatar" />
      )}
      <span>{`${props.firstName} ${props.lastName}`}</span>
    </li>
  );
});

export default LikesListItem;
