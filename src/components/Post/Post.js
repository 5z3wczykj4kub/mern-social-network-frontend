import { forwardRef, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { sendFetchPostsReq } from '../../redux/postSlice';

import useInfiniteScrolling from '../../hooks/useInfiniteScrolling';

import PostHeader from './PostHeader/PostHeader';
import PostBody from './PostBody/PostBody';
import PostFooter from './PostFooter/PostFooter';
import Comments from './Comments/Comments';

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
      <PostHeader post={props.post} />
      <PostBody post={props.post} />
      <PostFooter post={props.post} />
      {props.showComments && <Comments post={props.post} />}
    </div>
  );
});

export default Post;
