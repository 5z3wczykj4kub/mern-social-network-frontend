import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';

import classes from './Home.module.scss';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      (async () => {
        const res = await fetch('/posts');
        const posts = await res.json();
        setPosts(posts);
      })(),
    []
  );

  const postsList = posts.map(
    ({ id, author, textContent, imageUrl, likes, comments }, index) => (
      <Post
        className={
          index === 0 ? `${classes.post} ${classes.first}` : classes.post
        }
        key={id}
        id={id}
        author={author}
        textContent={textContent}
        imageUrl={imageUrl}
        likes={likes}
        comments={comments}
      />
    )
  );

  return (
    <main className={classes.home}>
      <Navbar />
      {posts.length > 0 ? postsList : <Loader />}
    </main>
  );
}

export default Home;
