import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import { sendFetchPostsReq, cleanupPosts } from '../../redux/postSlice';
import { closeLikeDrawer } from '../../redux/likeDrawerSlice';

import Navbar from '../../components/Navbar/Navbar';
import NavbarDesktop from '../../components/NavbarDesktop/NavbarDesktop';
import SkeletonPost from '../../components/Post/SkeletonPost/SkeletonPost';
import Post from '../../components/Post/Post';
import LikeDrawer, {
  likeDrawerClassNames,
} from '../../components/Post/LikeDrawer/LikeDrawer';
import Backdrop, {
  backdropClassNames,
} from '../../components/Backdrop/Backdrop';

import useNavbar from '../../hooks/useNavbar';

import classes from './Home.module.scss';

function Home() {
  const lastPostRef = useRef();

  const { isNavbarDesktopUsed } = useSelector(({ navbar }) => navbar);
  const { fetchedPosts, page, arePostsLoading } = useSelector(
    ({ post }) => post
  );
  const { isOpen } = useSelector(({ likeDrawer }) => likeDrawer);
  const dispatch = useDispatch();

  useNavbar();

  useEffect(() => {
    if (page !== 0) return;
    dispatch(sendFetchPostsReq(page, 10));
  }, [dispatch, page]);

  useEffect(
    () => () => {
      dispatch(cleanupPosts());
      dispatch(closeLikeDrawer());
    },
    [dispatch]
  );

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
      {isNavbarDesktopUsed ? <NavbarDesktop /> : <Navbar />}
      {fetchedPosts.length > 0 && postsList}
      {arePostsLoading && skeletonPostsList}
      {!arePostsLoading && fetchedPosts.length === 0 && (
        <p style={{ marginTop: '4rem', textAlign: 'center' }}>No posts found</p>
      )}
      <>
        <CSSTransition
          in={isOpen}
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
          in={isOpen}
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
