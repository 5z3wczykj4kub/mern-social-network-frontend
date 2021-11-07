import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { sendLikePostReq } from '../../../redux/postSlice';
import { openLikeDrawer } from '../../../redux/likeDrawerSlice';

import Spinner from '../../Spinner/Spinner';

import like from '../../../assets/like.png';
import liked from '../../../assets/liked.png';
import commentsIcon from '../../../assets/comments.png';

import classes from './PostFooter.module.scss';

function PostFooter({ index }) {
  const { fetchedPosts } = useSelector(({ post }) => post);
  const { id: profileId } = useSelector(({ profile }) => profile);
  const dispatch = useDispatch();

  const history = useHistory();

  const { id, likes, isLiked, comments, isLikeLoading } = fetchedPosts[index];

  return (
    <footer
      className={classes.postFooter}
      onClick={() => dispatch(openLikeDrawer(index))}
    >
      <div>
        {isLikeLoading && (
          <button className={classes.noHover}>
            <Spinner />
          </button>
        )}
        {!isLikeLoading && (
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(sendLikePostReq(id, profileId, index));
            }}
          >
            {!isLiked && <img src={like} alt="like" />}
            {isLiked && <img src={liked} alt="liked" />}
          </button>
        )}
        <span>{likes.length}</span>
      </div>
      <div>
        <span>{comments}</span>
        <button
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Link to={`/comments/${id}`}>
            <img src={commentsIcon} alt="comments" />
          </Link>
        </button>
      </div>
    </footer>
  );
}

export default PostFooter;
