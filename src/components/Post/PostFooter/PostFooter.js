import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Prompt } from 'react-router';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import commentsIcon from '../../../assets/comments.png';
import like from '../../../assets/like.png';
import liked from '../../../assets/liked.png';
import { toggleLike } from '../../../redux/postSlice';
import Backdrop, { backdropClassNames } from '../../Backdrop/Backdrop';
import Spinner from '../../Spinner/Spinner';
import LikeDrawer, { likeDrawerClassNames } from '../LikeDrawer/LikeDrawer';
import classes from './PostFooter.module.scss';

function PostFooter({ post }) {
  const [isLikeDrawerOpen, setIsLikeDrawerOpen] = useState(false);
  const [isLikeLoading, setIsLikeLoading] = useState(false);

  const authProfileId = useSelector((state) => state.authProfile.id);
  const dispatch = useDispatch();

  const openLikeDrawerHandler = () => {
    if (isLikeLoading) return;
    setIsLikeDrawerOpen(true);
  };

  const closeLikeDrawerHandler = (event) => {
    event.stopPropagation();
    setIsLikeDrawerOpen(false);
  };

  const likeButtonClickHandler = async (event) => {
    event.stopPropagation();
    setIsLikeLoading(true);
    await dispatch(toggleLike(post.id));
    setIsLikeLoading(false);
  };

  const likeDrawer = createPortal(
    <>
      <CSSTransition
        in={isLikeDrawerOpen}
        timeout={200}
        classNames={backdropClassNames()}
        mountOnEnter
        unmountOnExit
      >
        <Backdrop
          className={classes.likeDrawerBackdrop}
          onClick={closeLikeDrawerHandler}
        />
      </CSSTransition>
      <CSSTransition
        in={isLikeDrawerOpen}
        timeout={200}
        classNames={likeDrawerClassNames()}
        mountOnEnter
        unmountOnExit
      >
        <LikeDrawer
          likes={post.likes}
          closeLikeDrawer={closeLikeDrawerHandler}
        />
      </CSSTransition>
    </>,
    document.getElementById('likedrawer')
  );

  const isPostLiked = post.likes.includes(authProfileId);

  return (
    <footer className={classes.postFooter} onClick={openLikeDrawerHandler}>
      <div className={classes.likes}>
        {isLikeLoading && (
          <button className={classes.noHover}>
            <Spinner />
          </button>
        )}
        {!isLikeLoading && (
          <button onClick={likeButtonClickHandler}>
            {isPostLiked ? (
              <img src={liked} alt='liked' />
            ) : (
              <img src={like} alt='like' />
            )}
          </button>
        )}
        <span>{post.likes.length}</span>
      </div>
      <div className={classes.comments}>
        <span>{post.comments}</span>
        <button
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Link to={`/posts/${post.id}`}>
            <img src={commentsIcon} alt='comments' />
          </Link>
        </button>
      </div>
      {likeDrawer}
      <Prompt when={isLikeLoading} message={() => false} />
    </footer>
  );
}

export default PostFooter;
