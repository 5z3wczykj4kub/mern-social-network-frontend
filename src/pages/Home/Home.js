import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendFetchPostsReq } from '../../redux/postSlice';

import Navbar from '../../components/Navbar/Navbar';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';

import classes from './Home.module.scss';

function Home() {
  const { fetchedPosts } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  useEffect(() => dispatch(sendFetchPostsReq()), [dispatch]);

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
      {fetchedPosts.length > 0 ? postsList : <Loader />}
    </main>
  );
}

export default Home;
