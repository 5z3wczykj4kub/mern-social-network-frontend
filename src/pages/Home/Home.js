import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import { sendFetchPostsReq, closeLikeDrawer } from '../../redux/postSlice';

import Navbar from '../../components/Navbar/Navbar';
import SkeletonPost from '../../components/Post/SkeletonPost/SkeletonPost';
import Post from '../../components/Post/Post';
import LikeDrawer, {
  likeDrawerClassNames,
} from '../../components/Post/LikeDrawer/LikeDrawer';
import Backdrop, {
  backdropClassNames,
} from '../../components/Backdrop/Backdrop';

import classes from './Home.module.scss';

function Home() {
  const { fetchedPosts, arePostsLoading, likeDrawer } = useSelector(
    ({ post }) => post
  );
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
      <>
        <CSSTransition
          in={likeDrawer.isOpen}
          timeout={400}
          classNames={backdropClassNames()}
          mountOnEnter
          unmountOnExit
        >
          <Backdrop
            className={classes.likeDrawerBackdrop}
            onClick={() => dispatch(closeLikeDrawer())}
          />
        </CSSTransition>
        <CSSTransition
          in={likeDrawer.isOpen}
          timeout={400}
          classNames={likeDrawerClassNames()}
          mountOnEnter
          unmountOnExit
        >
          <LikeDrawer />
        </CSSTransition>
      </>
    </main>
  );
}

export default Home;
