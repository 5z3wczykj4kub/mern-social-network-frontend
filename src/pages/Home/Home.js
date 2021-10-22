import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendFetchPostsReq } from '../../redux/postSlice';

import Navbar from '../../components/Navbar/Navbar';
import SkeletonPost from '../../components/Post/SkeletonPost/SkeletonPost';
import Post from '../../components/Post/Post';

import classes from './Home.module.scss';

function Home() {
  const { fetchedPosts, arePostsLoading } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  useEffect(() => dispatch(sendFetchPostsReq()), [dispatch]);

  const skeletonPostsList = (
    <>
      <SkeletonPost className={`${classes.skeletonPost} ${classes.first}`} />
      <SkeletonPost className={classes.skeletonPost} />
      <SkeletonPost className={classes.skeletonPost} />
      <SkeletonPost className={classes.skeletonPost} />
    </>
  );
  const postsList = fetchedPosts.map(({ id }, index) => (
    <Post
      className={
        index === 0 ? `${classes.post} ${classes.first}` : classes.post
      }
      key={id}
      index={index}
    />
  ));

  return (
    <main className={classes.home}>
      <Navbar />
      {arePostsLoading && skeletonPostsList}
      {!arePostsLoading && fetchedPosts.length > 0 && postsList}
      {!arePostsLoading && fetchedPosts.length === 0 && (
        <p style={{ marginTop: '4rem', textAlign: 'center' }}>No posts found</p>
      )}
    </main>
  );
}

export default Home;
