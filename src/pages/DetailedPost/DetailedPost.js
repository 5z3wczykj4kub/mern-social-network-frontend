import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailedPost, setIsLoading } from '../../redux/detailedPostSlice';

import SkeletonPost from '../../components/Post/SkeletonPost/SkeletonPost';
import Post from '../../components/Post/Post';

import PostContext from '../../context/PostContext';

import useCloseLikeDrawerOnPageLeave from '../../hooks/useCloseLikeDrawerOnPageLeave';

import classes from './DetailedPost.module.scss';

function DetailedPost() {
  const { fetchedPosts } = useSelector(({ post }) => post);
  const { isLoading } = useSelector(({ detailedPost }) => detailedPost);
  const dispatch = useDispatch();

  const { postId } = useParams();

  const fetchedPost = useSelector(({ post }) =>
    post.fetchedPosts.find(({ id }) => id === postId)
  );
  const { detailedPost } = useSelector(({ detailedPost }) => detailedPost);

  useEffect(() => {
    // determine whether selected post is already in redux store
    if (!fetchedPosts.find(({ id }) => id === postId)) {
      dispatch(fetchDetailedPost(postId));
      return;
    }
    dispatch(setIsLoading(false));
  }, [dispatch, fetchedPosts, postId]);

  useCloseLikeDrawerOnPageLeave();

  let post;
  let wasAlreadyFetched;
  if (fetchedPost) {
    post = fetchedPost;
    wasAlreadyFetched = true;
  }
  if (!fetchedPost && detailedPost) {
    post = detailedPost;
    wasAlreadyFetched = false;
  }

  return !isLoading ? (
    <PostContext.Provider value={{ wasAlreadyFetched }}>
      <Post className={classes.detailedPost} post={post} showComments />
    </PostContext.Provider>
  ) : (
    <SkeletonPost className={classes.skeletonPost} />
  );
}

export default DetailedPost;
