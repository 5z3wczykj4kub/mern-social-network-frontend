import { useEffect, useRef } from 'react';
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
  const lastPostRef = useRef();

  const {
    fetchedPosts,
    fetchingMorePosts,
    page,
    hasMorePosts,
    arePostsLoading,
    likeDrawer,
  } = useSelector(({ post }) => post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page !== 0) return;
    dispatch(sendFetchPostsReq(page, 10));
  }, [dispatch, page]);

  useEffect(() => {
    if (!hasMorePosts) return;
    if (fetchingMorePosts) dispatch(sendFetchPostsReq(page, 10));
  }, [dispatch, fetchingMorePosts, page, hasMorePosts]);

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
      index={index}
      ref={index === fetchedPosts.length - 1 ? lastPostRef : null}
    />
  ));

  return (
    <main className={classes.home}>
      <Navbar />
      {fetchedPosts.length > 0 && postsList}
      {arePostsLoading && skeletonPostsList}
      {!arePostsLoading && fetchedPosts.length === 0 && (
        <p style={{ marginTop: '4rem', textAlign: 'center' }}>No posts found</p>
      )}
      <>
        <CSSTransition
          in={likeDrawer.isOpen}
          timeout={200}
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
          timeout={200}
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
