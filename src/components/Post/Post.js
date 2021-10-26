import { useEffect, forwardRef } from 'react';

import { useDispatch } from 'react-redux';
import { setFetchingMorePosts } from '../../redux/postSlice';

import PostHeader from './PostHeader/PostHeader';
import PostBody from './PostBody/PostBody';
import PostFooter from './PostFooter/PostFooter';

import classes from './Post.module.scss';

const Post = forwardRef((props, lastPostRef) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!lastPostRef) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(setFetchingMorePosts(true));
      }
    });
    observer.observe(lastPostRef.current);
    return () => observer.disconnect();
  }, [dispatch, lastPostRef]);

  function className() {
    return `${classes.post} ${props.className}`;
  }

  return (
    <div className={className()} ref={lastPostRef}>
      <PostHeader index={props.index} />
      <PostBody index={props.index} />
      <PostFooter index={props.index} />
    </div>
  );
});

export default Post;
