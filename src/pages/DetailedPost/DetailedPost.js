import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Prompt, useParams } from 'react-router';
import Post from '../../components/Post/Post';
import SkeletonPost from '../../components/Post/SkeletonPost/SkeletonPost';
import useCloseLikeDrawerOnPageLeave from '../../hooks/useCloseLikeDrawerOnPageLeave';
import { cleanupPosts, fetchDetailedPost } from '../../redux/postSlice';
import classes from './DetailedPost.module.scss';

const DetailedPost = () => {
  const { postId } = useParams();

  const post = useSelector(({ post }) =>
    post.fetchedPosts.find(({ id }) => id === postId)
  );
  const postsLength = useSelector((state) => state.post.fetchedPosts.length);
  const isPostLoading = useSelector((state) => state.post.isPostLoading);
  const isCommentBeingAdded = useSelector(
    (state) => state.comments.isCommentBeingAdded
  );
  const dispatch = useDispatch();

  // Fetch post if it's not already cached.
  useEffect(() => {
    if (post) return;
    const promise = dispatch(fetchDetailedPost(postId));
    return () => promise.abort();
  }, [dispatch, post, postId]);

  useEffect(
    () => () => {
      if (postsLength === 1) dispatch(cleanupPosts());
    },
    [dispatch, postsLength]
  );

  useCloseLikeDrawerOnPageLeave();

  return isPostLoading && !post ? (
    <SkeletonPost className={classes.skeletonPost} />
  ) : (
    <>
      <Post className={classes.comments} post={post} showComments />
      <Prompt when={isCommentBeingAdded} message={() => false} />
    </>
  );
};

export default DetailedPost;
