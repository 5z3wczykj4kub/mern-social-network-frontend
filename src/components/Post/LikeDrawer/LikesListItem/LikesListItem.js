import { forwardRef, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { sendGetUsersWhoLikedThePostReq } from '../../../../redux/postSlice';

import useInfiniteScrolling from '../../../../hooks/useInfiniteScrolling';

import avatar from '../../../../assets/avatar64x64.png';

import classes from './LikesListItem.module.scss';

const LikesListItem = forwardRef((props, lastUserListItemRef) => {
  const { likeDrawer, fetchedPosts } = useSelector(({ post }) => post);

  const { likes } = fetchedPosts[likeDrawer.postIndex];
  const { page, hasMoreLikes } = likeDrawer;

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
