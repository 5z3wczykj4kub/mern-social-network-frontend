import { forwardRef, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { sendFetchPostsReq } from '../../redux/postSlice';

import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';

import PostHeader from './PostHeader/PostHeader';
import PostBody from './PostBody/PostBody';
import PostFooter from './PostFooter/PostFooter';

import classes from './Post.module.scss';

const Post = forwardRef((props, lastPostRef) => {
  const { hasMorePosts, page } = useSelector(({ post }) => post);

  const action = useMemo(() => sendFetchPostsReq(page, 10), [page]);

  useInfiniteScrolling(lastPostRef, action, hasMorePosts, page);

  function className() {
    return `${classes.post} ${props.className}`;
  }

  return (
    <div className={className()} ref={lastPostRef}>
      <PostHeader id={props.id} />
      <PostBody id={props.id} />
      <PostFooter id={props.id} />
    </div>
  );
});

export default Post;
