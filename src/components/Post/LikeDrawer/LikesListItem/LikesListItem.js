import { forwardRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import avatar from '../../../../assets/avatar64x64.png';
import useInfiniteScrolling from '../../../../hooks/useInfiniteScrolling';
import { sendGetUsersWhoLikedThePostReq } from '../../../../redux/likeDrawerSlice';
import classes from './LikesListItem.module.scss';

const LikesListItem = forwardRef(
  (
    { signal, id, avatarImageUrl, firstName, lastName, isLoading, likes },
    lastUserListItemRef
  ) => {
    const { page, hasMoreLikes } = useSelector(({ likeDrawer }) => likeDrawer);

    const action = useMemo(
      () =>
        sendGetUsersWhoLikedThePostReq(
          likes.slice(page * 10, (page + 1) * 10),
          signal
        ),
      [likes, page, signal]
    );

    useInfiniteScrolling(lastUserListItemRef, action, hasMoreLikes, page);

    function className() {
      return isLoading
        ? `${classes.likesListItem} ${classes.loading}`
        : classes.likesListItem;
    }

    if (isLoading)
      return (
        <li className={className()} ref={lastUserListItemRef}>
          {avatarImageUrl ? (
            <img src={avatarImageUrl} alt='avatar' />
          ) : (
            <img src={avatar} alt='avatar' />
          )}
          <span>{`${firstName} ${lastName}`}</span>
        </li>
      );

    return (
      <Link to={`/profiles/${id}`}>
        <li className={className()} ref={lastUserListItemRef}>
          {avatarImageUrl ? (
            <img src={avatarImageUrl} alt='avatar' />
          ) : (
            <img src={avatar} alt='avatar' />
          )}
          <span>{`${firstName} ${lastName}`}</span>
        </li>
      </Link>
    );
  }
);

export default LikesListItem;
