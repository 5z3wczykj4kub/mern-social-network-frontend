import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { sendFetchPostsReq } from '../../redux/postSlice';

import SkeletonPost from '../../components/Post/SkeletonPost/SkeletonPost';
import Post from '../../components/Post/Post';

import classes from './Home.module.scss';

function Home() {
  const lastPostRef = useRef();

  const { fetchedPosts, page, arePostsLoading } = useSelector(
    ({ post }) => post
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (page !== 0) return;
    dispatch(sendFetchPostsReq(page, 10));
  }, [dispatch, page]);

  const skeletonPostsList = (
    <>
      <SkeletonPost
        className={
          fetchedPosts.length === 0
            ? `${classes.skeletonPost} ${classes.first}`
            : classes.skeletonPost
        }
      />
      <SkeletonPost className={classes.skeletonPost} />
    </>
  );
  const postsList = fetchedPosts.map(({ id }, index) => (
    <Post
      className={
        index === 0 ? `${classes.post} ${classes.first}` : classes.post
      }
      key={id}
      id={id}
      ref={index === fetchedPosts.length - 1 ? lastPostRef : null}
    />
  ));

  return (
    <main className={classes.home}>
      {fetchedPosts.length > 0 && postsList}
      {arePostsLoading && skeletonPostsList}
      {!arePostsLoading && fetchedPosts.length === 0 && (
        <p style={{ marginTop: '4rem', textAlign: 'center' }}>No posts found</p>
      )}
    </main>
  );
}

export default Home;
