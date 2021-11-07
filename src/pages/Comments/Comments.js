import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useParams } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { cleanupPosts, sendFetchPostReq } from '../../redux/postSlice';
import { closeLikeDrawer } from '../../redux/likeDrawerSlice';

import Navbar from '../../components/Navbar/Navbar';
import NavbarDesktop from '../../components/NavbarDesktop/NavbarDesktop';
import SkeletonPost from '../../components/Post/SkeletonPost/SkeletonPost';
import Post from '../../components/Post/Post';
import Backdrop, {
  backdropClassNames,
} from '../../components/Backdrop/Backdrop';
import LikeDrawer, {
  likeDrawerClassNames,
} from '../../components/Post/LikeDrawer/LikeDrawer';

import useNavbar from '../../hooks/useNavbar';

import classes from './Comments.module.scss';

function Comments() {
  const { isNavbarDesktopUsed } = useSelector(({ navbar }) => navbar);
  const { arePostsLoading } = useSelector(({ post }) => post);
  const { isOpen } = useSelector(({ likeDrawer }) => likeDrawer);
  const dispatch = useDispatch();

  const { postId } = useParams();

  useEffect(() => {
    dispatch(sendFetchPostReq(postId));
    return () => dispatch(cleanupPosts());
  }, [dispatch, postId]);

  useEffect(() => () => dispatch(closeLikeDrawer()), [dispatch]);

  useNavbar();

  return (
    <>
      {isNavbarDesktopUsed ? <NavbarDesktop /> : <Navbar />}
      {arePostsLoading ? (
        <SkeletonPost className={classes.skeletonPost} />
      ) : (
        <Post className={classes.post} index={0} />
      )}
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
  );
}

export default Comments;
