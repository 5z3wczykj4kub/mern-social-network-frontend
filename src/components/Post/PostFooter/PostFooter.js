import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { sendLikePutReq } from '../../../redux/postSlice';
import { openLikeDrawer } from '../../../redux/likeDrawerSlice';

import Spinner from '../../Spinner/Spinner';

import like from '../../../assets/like.png';
import liked from '../../../assets/liked.png';
import commentsIcon from '../../../assets/comments.png';

import classes from './PostFooter.module.scss';

function PostFooter(props) {
  const dispatch = useDispatch();

  return (
    <footer
      className={classes.postFooter}
      onClick={() => {
        if (props.post.isLikeLoading) return;
        dispatch(openLikeDrawer(props.post.id));
      }}
    >
      <div>
        {props.post.isLikeLoading && (
          <button className={classes.noHover}>
            <Spinner />
          </button>
        )}
        {!props.post.isLikeLoading && (
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(sendLikePutReq(props.post.id));
            }}
          >
            {!props.post.isLiked && <img src={like} alt="like" />}
            {props.post.isLiked && <img src={liked} alt="liked" />}
          </button>
        )}
        <span>{props.post.likes.length}</span>
      </div>
      <div>
        <span>{props.post.comments.length}</span>
        <button
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Link to={`/posts/${props.post.id}`}>
            <img src={commentsIcon} alt="comments" />
          </Link>
        </button>
      </div>
    </footer>
  );
}

export default PostFooter;
