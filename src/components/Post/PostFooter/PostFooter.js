import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { sendLikePostReq } from '../../../redux/postSlice';
import { sendLikeDetailedPostReq } from '../../../redux/detailedPostSlice';
import { openLikeDrawer } from '../../../redux/likeDrawerSlice';

import Spinner from '../../Spinner/Spinner';

import like from '../../../assets/like.png';
import liked from '../../../assets/liked.png';
import commentsIcon from '../../../assets/comments.png';

import classes from './PostFooter.module.scss';

function PostFooter(props) {
  const fetchedPost = useSelector(({ post }) =>
    post.fetchedPosts.find(({ id }) => id === props.id)
  );
  const { detailedPost } = useSelector(({ detailedPost }) => detailedPost);
  const { id: profileId } = useSelector(({ profile }) => profile);
  const dispatch = useDispatch();

  let postFooter = null;
  if (fetchedPost) {
    postFooter = (
      <footer
        className={classes.postFooter}
        onClick={() => {
          if (fetchedPost.isLikeLoading) return;
          dispatch(openLikeDrawer(fetchedPost.id));
        }}
      >
        <div>
          {fetchedPost.isLikeLoading && (
            <button className={classes.noHover}>
              <Spinner />
            </button>
          )}
          {!fetchedPost.isLikeLoading && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                dispatch(sendLikePostReq(fetchedPost.id, profileId));
              }}
            >
              {!fetchedPost.isLiked && <img src={like} alt="like" />}
              {fetchedPost.isLiked && <img src={liked} alt="liked" />}
            </button>
          )}
          <span>{fetchedPost.likes.length}</span>
        </div>
        <div>
          <span>{fetchedPost.comments}</span>
          <button
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <Link to={`/posts/${fetchedPost.id}`}>
              <img src={commentsIcon} alt="comments" />
            </Link>
          </button>
        </div>
      </footer>
    );
  }
  if (!fetchedPost && detailedPost) {
    postFooter = (
      <footer
        className={classes.postFooter}
        onClick={() => {
          if (detailedPost.isLikeLoading) return;
          dispatch(openLikeDrawer(detailedPost.id));
        }}
      >
        <div>
          {detailedPost.isLikeLoading && (
            <button className={classes.noHover}>
              <Spinner />
            </button>
          )}
          {!detailedPost.isLikeLoading && (
            <button
              onClick={(event) => {
                event.stopPropagation();
                dispatch(sendLikeDetailedPostReq(detailedPost.id, profileId));
              }}
            >
              {!detailedPost.isLiked && <img src={like} alt="like" />}
              {detailedPost.isLiked && <img src={liked} alt="liked" />}
            </button>
          )}
          <span>{detailedPost.likes.length}</span>
        </div>
        <div>
          <span>{detailedPost.comments}</span>
          <button
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <Link to={`/posts/${detailedPost.id}`}>
              <img src={commentsIcon} alt="comments" />
            </Link>
          </button>
        </div>
      </footer>
    );
  }

  return postFooter;
}

export default PostFooter;
