import { forwardRef, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { sendGetUsersWhoLikedThePostReq } from '../../../../redux/likeDrawerSlice';

import useInfiniteScrolling from '../../../../hooks/useInfiniteScrolling';

import avatar from '../../../../assets/avatar64x64.png';

import classes from './LikesListItem.module.scss';

const LikesListItem = forwardRef(
  (
    { signal, avatarImageUrl, firstName, lastName, isLoading },
    lastUserListItemRef
  ) => {
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

    return (
      <li className={className()} ref={lastUserListItemRef}>
        {avatarImageUrl ? (
          <img src={avatarImageUrl} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
        <span>{`${firstName} ${lastName}`}</span>
      </li>
    );
  }
);

export default LikesListItem;
